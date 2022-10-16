import React, { useCallback, useState } from "react";
import './Login.css';
import logo from '../../assets/images/Logotipo.png';
import { loginUser } from "../../services/Login.js";
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
          <div style={{width:350}} >
             <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa tu Rut"
            value={email}
            name='Rut'
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa tu nombre"
            value={password}
            name='password'
            onChange={handleInputChange}
            
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa tu correo"
            value={password}
            name='password'
            onChange={handleInputChange}
            
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="Ingresa fecha"
            value={password}
            name='password'
            onChange={handleInputChange}
            
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Ingresa personas"
            value={password}
            name='password'
            onChange={handleInputChange}
            
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Mensaje"
            value={password}
            name='password'
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