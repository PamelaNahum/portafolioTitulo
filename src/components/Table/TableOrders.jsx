import React, { useState } from "react";
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import { addTable, disableTable, editTable, enableTable, getTable, getTableid } from "../../services/Tables";
import { BsArrowRightShort } from 'react-icons/bs';
import './Table.css';


const TableOrders =({mesas, setMesas})=>{
    
      const [data, setData] = useState(mesas);
      const [modalEditar, setModalEditar] = useState(false);
      const [modalEliminar, setModalEliminar] = useState(false);
      const [modalInsertar, setModalInsertar] = useState(false);
    
      const [mesaSeleccionado, setMesaSeleccionado] = useState({
        id: '',
        dish: '',
        table: ''
      });
    
      const seleccionarMesa=(elemento)=>{
    setMesaSeleccionado(elemento);
    (caso==='Editar')?setModalEditar(true):setModalEliminar(true)
      }

      /* const getName = async(id)=>{
        const mesa = await getTableid(id);
        return mesa.name
      } */
    
      const handleChange=e=>{
        const {name, value}=e.target;
        console.log(e.target)
        setMesaSeleccionado((prevState)=>({
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
        //setMesaSeleccionado(null);
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
              <th>Plato</th>
              <th>Mesa</th>
              <th>Entregar</th>
            </tr>
          </thead>
          <tbody>
            {data[1]!= undefined ? <>{data.map(e=>(e.map(elemento=>(<tr>
                <td>{elemento.dish}</td>
                {/* <td>{getName(elemento.tableId) }</td> */}
                <td>{elemento.tableId}</td>
                <td><button className="btn btn-primary" style={{margin:10}} onClick={()=>seleccionarMesa(elemento, 'Editar')}>Preparado</button> 
                </td>
              </tr>))
              
            ))
            }</>: <>{data[0].map(elemento=>(<tr>
              <td>{elemento.dish}</td>
              {/* <td>{getName(elemento.tableId) }</td> */}
              <td>{elemento.tableId}</td>
              <td><button className="btn btn-primary" style={{margin:10}} onClick={()=>seleccionarMesa(elemento, 'Editar')}>Preparado</button> 
              </td>
            </tr>
            
          ))
          }</>}
            
          </tbody>
        </table>
  
        <Modal isOpen={modalEditar}>
          <ModalHeader>
            <div>
              <h3>Editar Mesa</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>ID</label>
              <input
                className="form-control"
                readOnly
                type="text"
                name="id"
                value={mesaSeleccionado && mesaSeleccionado.id}
              />
              <br />
  
              <label>Mesa</label>
              <input
                className="form-control"
                type="text"
                name="name"
                value={mesaSeleccionado && mesaSeleccionado.name}
                onChange={handleChange}
              />
              <br />
  
              <label>Capacidad</label>
              <input
                className="form-control"
                type="text"
                name="capacity"
                value={mesaSeleccionado && mesaSeleccionado.capacity}
                onChange={handleChange}
              />
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={()=>editar(mesaSeleccionado)}>
              Actualizar
            </button>
            <button
              className="btn btn-danger"
              onClick={()=>setModalEditar(false)}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>
  
  
        <Modal isOpen={modalEliminar}>
          {mesaSeleccionado.isEnabled ? 
          <ModalBody>
          Estás Seguro que deseas habilitar la mesa: {mesaSeleccionado && mesaSeleccionado.name}
        </ModalBody>
          :
          <ModalBody>
          Estás Seguro que deseas deshabilitar la mesa: {mesaSeleccionado && mesaSeleccionado.name}
        </ModalBody>
          }
          
          <ModalFooter>
            {mesaSeleccionado.isEnabled ?
            <button className="btn btn-danger" onClick={()=>habilitar(mesaSeleccionado)}>
            Sí
          </button>
            :
            <button className="btn btn-danger" onClick={()=>eliminar(mesaSeleccionado)}>
              Sí
            </button>}
            
            <button
              className="btn btn-secondary"
              onClick={()=>setModalEliminar(false)}
            >
              No
            </button>
          </ModalFooter>
        </Modal>
  
  
          <Modal isOpen={modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Insertar Mesa</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
  
              <label>Mesa</label>
              <input
                className="form-control"
                type="text"
                name="name"
                value={mesaSeleccionado ? mesaSeleccionado.name: ''}
                onChange={handleChange}
              />
              <br />
  
              <label>Cantidad</label>
              <input
                className="form-control"
                type="text"
                name="capacity"
                value={mesaSeleccionado ? mesaSeleccionado.capacity: ''}
                onChange={handleChange}
              />
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary"
            onClick={()=>insertar()}>
              Insertar
            </button>
            <button
              className="btn btn-danger"
              onClick={()=>setModalInsertar(false)}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>
      </div>
        

    );
}
export default TableOrders;