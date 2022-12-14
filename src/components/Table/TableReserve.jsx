import React, { useState, useCallback } from "react";
import { addClient } from "../../services/Cliente";
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import {useNavigate} from 'react-router-dom';
import './Table.css';


const TableReserve =({mesas, setMesas, cliente, fecha, hora, type})=>{
    
      const [data, setData] = useState(mesas);
      const [reservaCreada, setReservaCreada] = useState(false);
      const navigate = useNavigate();
    const handleOnclick = useCallback(()=>navigate('/'+type, {replace:true}, [navigate]));
    
      const [mesaSeleccionado, setMesaSeleccionado] = useState({
        id: '',
        nombre: '',
        minutos: ''
      });
      const reservar =async(mesa)=>{
        const cli = {
            name: cliente.nombre, 
            lastName: cliente.apellido, 
            rut: cliente.rut, 
            reservationDateStr:cliente.fecha, 
            reservationTimeStr:cliente.hora,
            tableId: mesa.id,
            reservationDate: {
                year: fecha.year,
                month: fecha.month,
                day: fecha.day,
                dayOfWeek: 1
            },
            reservationTime: {
                hour: hora.hrs,
                minute: hora.min
              }

         }
         await addClient(cli);
         setReservaCreada(true);
      }

    return(
        <div className="App" >
        <table className="table table-bordered" >
          <thead>
            <tr>
              <th style={{color:'white'}}>Mesa</th>
              <th style={{color:'white'}}>Cantidad</th>
              <th style={{color:'white'}}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map(elemento=>(
              <tr>
                <td style={{color:'white'}}>{elemento.name}</td>
                <td style={{color:'white'}}>{elemento.capacity}</td>
                <td><button className="btn btn-primary" style={{margin:10}} onClick={()=>reservar(elemento)} >Seleccionar</button> 
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>

        <Modal isOpen={reservaCreada}>
          <ModalHeader>
            <div>
              <h3 >Reservado con exito</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
  
              <p>Su reserva a sido creada con ??xito para el d??a: {cliente.fecha} a las: {cliente.hora}</p>
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
}
export default TableReserve;