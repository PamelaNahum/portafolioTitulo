import React from "react";
import '../css/Login.css'
import logo from '../assets/images/Logotipo.png'

const Login = ()=>{


    return(
      <div className="auth-wrapper">
          <div className="auth-inner">
  <form>
        <img className="img" src = {logo} alt = '' />
        <div className="mb-3">
          <label>Rut</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa tu Rut"
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresa tu contraseña"
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
          <button className="btn btn-primary">
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