import React, { useCallback, useState, useEffect } from "react";
import './Login.css';
import {useNavigate} from 'react-router-dom';
import { TextField } from "@mui/material";
import TableReserve from "../Table/TableReserve";
import { getTableReserve } from "../../services/Tables";

const initialReserva =[
  {
    rut:'',
    nombre:'',
    apellido:'',
    correo:'',
    fecha:'',
    hora:'',
    mensaje:''
  }
]
var date = {};
var time ={};

const Reserve = ({type})=>{

  const [reserva, setReserva]=useState(initialReserva);
  const [showTable, setShowTable]=useState(false);
  const [allTables, setAllTables] = useState([{ id:"" , name: "", capcity: 0 },]);
  const navigate = useNavigate();
  const handleOnclick = useCallback(()=>navigate('/', {replace:true}, [navigate]));
  const {rut, nombre,apellido, correo, fecha, hora, mensaje}= reserva;

  


  const handleInputChange=(e)=>{
    
    const changedFormValue ={
      ...reserva, 
      [e.target.name]:e.target.value
      //key:key
    }
    setReserva(changedFormValue)
  }
  const reservar = async()=>{
    setAllTables( await getTableReserve(date, time));
    setShowTable(true);

  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    date = {day:reserva.fecha.substr(8,2), month: reserva.fecha.substr(5,2), year: reserva.fecha.substr(0,4)};
    time = {hrs: reserva.hora.substr(0,2), min:reserva.hora.substr(3,2) };
    reservar();
    

    //handleOnclick()
    //login()
  }
  

    return(
    <div style={{flexDirection:'row', display:'flex'}}>
      <div style={{width:350 }} >
             <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <TextField 
            label="Rut" 
            id="Rut" 
            className="form-control" 
            type="text" 
            name='rut'
            value={rut}
            onChange={handleInputChange} />
        </div>
        <div className="mb-3">
        <TextField 
            label="Nombre" 
            id="Nombre" 
            className="form-control" 
            type="text" 
            name='nombre'
            value={nombre}
            onChange={handleInputChange} />
        </div>
        <div className="mb-3">
        <TextField 
            label="Apellido" 
            id="Apellido" 
            className="form-control" 
            type="text" 
            name='apellido'
            value={apellido}
            onChange={handleInputChange} />
        </div>
        <div className="mb-3">
        <TextField 
            label="Correo" 
            id="Correo" 
            className="form-control" 
            type="text" 
            name='correo'
            placeholder="Ingresa tu correo"
            value={correo}
            onChange={handleInputChange} />
        </div>
        <div className="mb-3">
        <TextField 
            label="Fecha" 
            id="Fecha" 
            className="form-control" 
            type="date" 
            name='fecha'
            value={fecha}
            onChange={handleInputChange} />
        </div>
        <div className="mb-3">
        <TextField 
            label="Hora" 
            id="Hora" 
            className="form-control" 
            type="time" 
            name='hora'
            value={hora}
            min="09:00" max="21:00"
            onChange={handleInputChange} />
        </div>
        <div className="mb-3">
        <TextField 
            label="Observaciones" 
            id="Observaciones" 
            className="form-control" 
            type="text" 
            name='mensaje'
            value={mensaje}
            onChange={handleInputChange} />
        </div>
        <div className="d-grid" style={{margin:20}}>
          <button type="submit" className="btn btn-primary">
            Buscar
          </button>
        </div>
      </form>
      </div>
      
      <div style={{marginLeft:200 }}>
      {showTable ? <TableReserve mesas={allTables} setMesas={setAllTables} cliente={reserva} fecha={date} hora={time} type={type} />: <p>Seleccione una fecha y hora</p>}
        
    
      </div>
    </div>
    );
}

export default Reserve;