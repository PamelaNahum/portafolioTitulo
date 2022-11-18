import React, { useCallback, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { addClient } from "../../services/Cliente";
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import TableReserve from "../Table/TableReserve";
import { getTableReserve } from "../../services/Tables";
import Dropdown from "react-bootstrap/Dropdown";

const initialReserva = [
  {
    rut: "",
    nombre: "",
    apellido: "",
    correo: "",
    fecha: "",
    hora: "",
    mensaje: "",
    mesa:[]
  },
];
var date = {};
var time = {};

const Reserve = ({ type }) => {
  const [reserva, setReserva] = useState(initialReserva);
  const [showTable, setShowTable] = useState(false);
  const [reservaCreada, setReservaCreada] = useState(false);
  const [allTables, setAllTables] = useState([
    { id: "", name: "", capcity: 0 },
  ]);
  const navigate = useNavigate();
  const handleOnclick = useCallback(() =>
    navigate("/", { replace: true }, [navigate])
  );
  const { rut, nombre, apellido, correo, fecha, hora, mensaje, mesa } = reserva;

  const handleInputChange = (e) => {
    const changedFormValue = {
      ...reserva,
      [e.target.name]: e.target.value,
      //key:key
    };
    setReserva(changedFormValue);
    console.log(reserva)
    if(e.target.name==="hora"){
      searchTable(e);
    }
  };
  const reservar = async () => {
    setAllTables(await getTableReserve(date, time));
    console.log(allTables)
    setShowTable(true);
  };

  const searchTable =(e)=>{
    console.log("funciona")
    
    date = {
      day: reserva.fecha.substr(8, 2),
      month: reserva.fecha.substr(5, 2),
      year: reserva.fecha.substr(0, 4),
    };
    time = { hrs: reserva.hora.substr(0, 2), min: reserva.hora.substr(3, 2) };
    reservar();

  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const cli = {
      name: nombre, 
      lastName: apellido, 
      email: correo, 
      reservationDateStr:fecha, 
      reservationTimeStr:hora,
      tableId: mesa,
      reservationDate: {
          year: date.year,
          month: date.month,
          day: date.day,
          dayOfWeek: 1
      },
      reservationTime: {
          hour: time.hrs,
          minute: time.min
        }

   }
   await addClient(cli);
   setReservaCreada(true);

    //handleOnclick()
    //login()
  };

  return (
    <div style={{ flexDirection: "row", display: "flex" }}>
      <div style={{ width: 350 }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <TextField
              label="Rut"
              id="Rut"
              className="form-control"
              type="text"
              name="rut"
              value={rut}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <TextField
              label="Nombre"
              id="Nombre"
              className="form-control"
              type="text"
              name="nombre"
              value={nombre}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <TextField
              label="Apellido"
              id="Apellido"
              className="form-control"
              type="text"
              name="apellido"
              value={apellido}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <TextField
              label="Correo"
              id="Correo"
              className="form-control"
              type="text"
              name="correo"
              placeholder="Ingresa tu correo"
              value={correo}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <TextField
              label="Fecha"
              id="Fecha"
              className="form-control"
              type="date"
              name="fecha"
              value={fecha}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <TextField
              label="Hora"
              id="Hora"
              className="form-control"
              type="time"
              name="hora"
              value={hora}
              min="09:00"
              max="21:00"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <TextField
              label="Observaciones"
              id="Observaciones"
              className="form-control"
              type="text"
              name="mensaje"
              value={mensaje}
              onChange={handleInputChange}
            />
          </div>
          <select 
          name="mesa"
          value={mesa} onChange={handleInputChange}
          style={{width:'100%'}}>
          {allTables.map(elemento=>
               ( <option value={elemento.id}>Sector: {elemento.name} / Capacidad: {elemento.capacity} Personas</option>)
              )}
          </select>
          
          <div className="d-grid" style={{ margin: 20 }}>
            <button type="submit" className="btn btn-primary">
              Buscar
            </button>
          </div>
        </form>
      </div>

      <Modal isOpen={reservaCreada}>
          <ModalHeader>
            <div>
              <h3 >Reservado con exito</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
  
              <p>Su reserva a sido creada con éxito para el día: {fecha} a las: {hora}</p>
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              className="btn btn-primary"
              onClick={()=>{setReservaCreada(false); handleOnclick()}}
            >
              Aceptar
            </button>
          </ModalFooter>
        </Modal>
    </div>
  );
};

export default Reserve;
