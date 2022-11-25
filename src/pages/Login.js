import React, { useCallback, useState } from "react";
import '../css/Login.css';
import logo from '../assets/images/Logotipo.png';
import { loginUser } from "../services/Login.js";
import {useNavigate} from 'react-router-dom';
import { Alert } from "@mui/material";
import { AlertTitle } from "@mui/material";

const initialUser =[
  {
    email:'',
    password:''
  }
]

const Login = ()=>{

  const [user, setUser]=useState(initialUser);
  const [showAlert, setShowAlert]=useState(false);
  const navigate = useNavigate();
  const handleAdimin = useCallback(()=>navigate('/admin', {replace:true}, [navigate]));
  const handleFinanzas = useCallback(()=>navigate('/finanzas', {replace:true}, [navigate]));
  const handleCocina = useCallback(()=>navigate('/cocina', {replace:true}, [navigate]));
  const handleRecepcion = useCallback(()=>navigate('/recepcion', {replace:true}, [navigate]));
  const {email, password}= user;

  const handleInputChange=(e)=>{
    
    const changedFormValue ={
      ...user, 
      [e.target.name]:e.target.value
      //key:key
    }
    setUser(changedFormValue)
  }

  const login = async()=>{
    if(user.email === 'riquelmeantonio90@gmail.com'){
      handleAdimin()
    }else if(user.email === 'pamela.nahum@gmail.com'){
      handleFinanzas()
    }else if(user.email === 'se.barrias@duocuc.cl'){
      handleRecepcion()
    }else if(user.email === 'fr.rodriguezf@duocuc.cl'){
      handleCocina()
    }else if(user.email === 'pamela.nahum14@gmail.com'){
      handleAdimin()
    }else{
      setShowAlert(true);
    }
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    login()
  }

    return(
      <>
      <div className="auth-wrapper">
          <div className="auth-inner">
  <form onSubmit={handleSubmit}>
        <img className="img" src = {logo} alt = '' />
        <div className="mb-3">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa tu Email"
            value={email}
            name='email'
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresa tu contraseña"
            value={password}
            name='password'
            onChange={handleInputChange}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" >
            Ingresar
          </button>
        </div>
        <p className="forgot-password text-right">
          Olvidaste tu <a href="#">contraseña?</a>
        </p>
      </form>
      </div>
      </div>
      {showAlert ? (
        <Alert severity="error">
          <AlertTitle>Usuario o contraseña incorrecta</AlertTitle>
          Revise sus credenciales y vuelva a intentarlo
        </Alert>
      ) : (
        <></>
      )}
      </>
    );
}

export default Login;