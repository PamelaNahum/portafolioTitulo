import React, { useCallback, useState } from "react";
import './Login.css';
import {useNavigate} from 'react-router-dom';

const initialReserva =[
  {
    rut:'',
    nombre:'',
    correo:'',
    fecha:'',
    persona:'',
    mensaje:''
  }
]

const Login = ()=>{

  const [reserva, setReserva]=useState(initialReserva);
  const navigate = useNavigate();
  const handleOnclick = useCallback(()=>navigate('/', {replace:true}, [navigate]));
  const {rut, nombre, correo, fecha, persona, mensaje}= reserva;

  const handleInputChange=(e)=>{
    
    const changedFormValue ={
      ...reserva, 
      [e.target.name]:e.target.value
      //key:key
    }
    setReserva(changedFormValue)
  }

  //const login = async()=>{
    //handleOnclick()
      //const res = await loginUser(user)
      //console.log(res);
      //if(res.token){
        //handleOnclick()
      //}else{
        //console.log("f")
      //}
  //}
  const handleSubmit =(e)=>{
    e.preventDefault();
    handleOnclick()
    //login()
  }

    return(
          <div style={{width:350}} >
             <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa tu Rut"
            value={rut}
            name='Rut'
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa tu nombre"
            value={nombre}
            name='nombre'
            onChange={handleInputChange}
            
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa tu correo"
            value={correo}
            name='correo'
            onChange={handleInputChange}
            
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="Ingresa fecha"
            value={fecha}
            name='fecha'
            onChange={handleInputChange}
            
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Ingresa personas"
            value={persona}
            name='persona'
            onChange={handleInputChange}
            
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Mensaje"
            value={mensaje}
            name='mensaje'
            onChange={handleInputChange}
            
          />
        </div>
        <div className="d-grid" style={{margin:20}}>
          <button type="submit" className="btn btn-primary">
            Reservar
          </button>
        </div>
      </form>
      </div>
    );
}

export default Login;