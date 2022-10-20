import React, { useState } from "react";
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import './Table.css';


const Table =()=>{

    const dataMesas = [
        { id: 1, nombre: "Mesahfdkghkfjdgh1", minutos: 5 },
        { id: 2, nombre: "gfdfgdgfd", minutos: 4 },
        { id: 3, nombre: "fdgfdgfdg", minutos: 6 },
        { id: 4, nombre: "fdgfdfdgdf", minutos: 2 },
        { id: 5, nombre: "fdgdfdfgfdgfd", minutos: 8 },
        { id: 6, nombre: "fdgfdgfdg", minutos: 2 },
      ];
    
      const [data, setData] = useState(dataMesas);
      const [modalEditar, setModalEditar] = useState(false);
      const [modalEliminar, setModalEliminar] = useState(false);
      const [modalInsertar, setModalInsertar] = useState(false);
    
      const [mesaSeleccionado, setMesaSeleccionado] = useState({
        id: '',
        nombre: '',
        minutos: ''
      });
    
      const seleccionarMesa=(elemento, caso)=>{
    setMesaSeleccionado(elemento);
    (caso==='Editar')?setModalEditar(true):setModalEliminar(true)
      }
    
      const handleChange=e=>{
        const {name, value}=e.target;
        setMesaSeleccionado((prevState)=>({
          ...prevState,
          [name]: value
        }));
      }
    
      const editar=()=>{
        var dataNueva=data;
        dataNueva.map(mesa=>{
          if(mesa.id===mesaSeleccionado.id){
            mesa.minutos=mesaSeleccionado.minutos;
            mesa.nombre=mesaSeleccionado.nombre;
          }
        });
        setData(dataNueva);
        setModalEditar(false);
      }
    
      const eliminar =()=>{
        setData(data.filter(mesa=>mesa.id!==mesaSeleccionado.id));
        setModalEliminar(false);
      }
    
      const abrirModalInsertar=()=>{
        setMesaSeleccionado(null);
        setModalInsertar(true);
      }
    
      const insertar =()=>{
        var valorInsertar=mesaSeleccionado;
        valorInsertar.id=data[data.length-1].id+1;
        var dataNueva = data;
        dataNueva.push(valorInsertar);
        setData(dataNueva);
        setModalInsertar(false);
      }
    

    return(
        <div className="App" >
        <br /><br /><br /><br />
      <button className="btn btn-success" onClick={()=>abrirModalInsertar()}>Insertar</button>
      <br /><br />
        <table className="table table-bordered" >
          <thead>
            <tr>
              <th>ID</th>
              <th>Mesa</th>
              <th>Cantidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map(elemento=>(
              <tr>
                <td>{elemento.id}</td>
                <td>{elemento.nombre}</td>
                <td>{elemento.minutos}</td>
                <td><button className="btn btn-primary" style={{margin:10}} onClick={()=>seleccionarMesa(elemento, 'Editar')}>Editar</button> {"   "} 
                <button className="btn btn-danger" style={{margin:10}} onClick={()=>seleccionarMesa(elemento, 'Eliminar')}>Eliminar</button></td>
              </tr>
            ))
            }
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
                name="nombre"
                value={mesaSeleccionado && mesaSeleccionado.nombre}
                onChange={handleChange}
              />
              <br />
  
              <label>Cantidad</label>
              <input
                className="form-control"
                type="text"
                name="minutos"
                value={mesaSeleccionado && mesaSeleccionado.minutos}
                onChange={handleChange}
              />
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={()=>editar()}>
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
          <ModalBody>
            Estás Seguro que deseas eliminar el país {mesaSeleccionado && mesaSeleccionado.nombre}
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-danger" onClick={()=>eliminar()}>
              Sí
            </button>
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
              <label>ID</label>
              <input
                className="form-control"
                readOnly
                type="text"
                name="id"
                value={data[data.length-1].id+1}
              />
              <br />
  
              <label>Mesa</label>
              <input
                className="form-control"
                type="text"
                name="nombre"
                value={mesaSeleccionado ? mesaSeleccionado.nombre: ''}
                onChange={handleChange}
              />
              <br />
  
              <label>Cantidad</label>
              <input
                className="form-control"
                type="text"
                name="minutos"
                value={mesaSeleccionado ? mesaSeleccionado.minutos: ''}
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
export default Table;