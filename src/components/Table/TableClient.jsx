import React, { useState } from "react";
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import { addTable, disableTable, editTable, enableTable, getTable } from "../../services/Tables";
import { BsArrowRightShort } from 'react-icons/bs';
import './Table.css';


const TableClient =({client, setClient})=>{
    
      const [data, setData] = useState(client);
      const [modalEditar, setModalEditar] = useState(false);
      const [modalEliminar, setModalEliminar] = useState(false);
      const [modalInsertar, setModalInsertar] = useState(false);
    
      const [mesaSeleccionado, setClientSeleccionado] = useState({
        id: '',
        nombre: '',
        minutos: ''
      });
    
      const seleccionarClient=(elemento, caso)=>{
    setClientSeleccionado(elemento);
    (caso==='Editar')?setModalEditar(true):setModalEliminar(true)
      }
    
      const handleChange=e=>{
        const {name, value}=e.target;
        console.log(e.target)
        setClientSeleccionado((prevState)=>({
          ...prevState,
          [name]: value
        }));
      }
    
      const editar= async(table)=>{
        const edit = {"id":table.id, "capacity": parseInt(table.capacity)}
        console.log(edit)
        await editTable(edit)
        setData(await getTable())
        setModalEditar(false);
      }
    
      const eliminar = async(table)=>{
        await enableTable(table.id)
        setData(await getTable())
        setModalEliminar(false)
      }

      const habilitar = async(table)=>{
        await disableTable(table.id)
        setData(await getTable())
        setModalEliminar(false)
      }
    
      const abrirModalInsertar=()=>{
        //setClientSeleccionado(null);
        setModalInsertar(true);
      }
    
      const insertar =async()=>{
        var valorInsertar={"name":mesaSeleccionado.name, "capacity": parseInt(mesaSeleccionado.capacity)};
        console.log(valorInsertar)
        await addTable(valorInsertar);
        setData(await getTable())
        setModalInsertar(false);
      }
    

    return(
        <div className="App" >
        <br /><br /><br /><br />
      <br /><br />
        <table className="table table-bordered" >
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>rut</th>
              <th>Mesa</th>
              <th>Reserva</th>
            </tr>
          </thead>
          <tbody>
            {data.map(elemento=>(
              <tr>
                <td>{elemento.clientId}</td>
                <td>{elemento.name} {elemento.lastName}</td>
                <td>{elemento.rut}</td>
                <td>{elemento.tableId}</td>
                <td>{elemento.reservationDatetime}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
  
        </div>

    );
}
export default TableClient;