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

const OrderForm = ()=>{

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
        
        <div className="d-grid" style={{margin:20}}>
          <button type="submit" className="btn btn-primary">
            Ordenar
          </button>
        </div>
      </form>
      </div>
    );
}

export default OrderForm;