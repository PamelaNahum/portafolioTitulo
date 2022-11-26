import React, { useState } from "react";
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import { addTable, disableTable, editTable, enableTable, getTable, getTableid } from "../../services/Tables";
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
    
      const obtenerNombre = async(table)=>{
        const nom = await getTableid(table)
        return nom.name
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
      <p className="p__cormorant" style={{ color: '#E76F51', margin: '2rem 0' }}>Mantenedor de Clientes</p>
        <table className="table table-bordered" >
          <thead>
            <tr>
              <th>Nombre</th>
              <th>rut</th>
              <th>Mesa</th>
              <th>Reserva</th>
            </tr>
          </thead>
          <tbody>
            {data.map(elemento=>(
              <tr>
                <td>{elemento.name} {elemento.lastName}</td>
                <td>{elemento.email}</td>
                <td>{elemento.tableName}</td>
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