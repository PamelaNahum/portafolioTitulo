import React, { useCallback, useState } from "react";
import '../css/Login.css';
import logo from '../assets/images/Logotipo.png';
import { loginUser } from "../services/Login.js";
import {useNavigate} from 'react-router-dom';

const initialUser =[
  {
    email:'',
    password:''
  }
]

const Login = ()=>{

  const [user, setUser]=useState(initialUser);
  const navigate = useNavigate();
  const handleOnclick = useCallback(()=>navigate('/admin', {replace:true}, [navigate]));
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
    handleOnclick()
      const res = await loginUser(user)
      console.log(res);
      if(res.token){
        handleOnclick()
      }else{
        console.log("f")
      }
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    login()
  }

    return(
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
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
               Recuerdame
            </label>
          </div>
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
    );
}

export default Login;