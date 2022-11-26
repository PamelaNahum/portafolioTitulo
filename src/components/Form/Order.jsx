import React, { useCallback, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { getUserByRut } from "../../services/Cliente";
import { Alert } from '@mui/material';
import { AlertTitle } from '@mui/material';

const initialReserva = [
  {
    rut: "",
  },
];
var cliente = [];

const OrderForm = () => {
  const [reserva, setReserva] = useState(initialReserva);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const handleOnclick = useCallback(() =>
    navigate("/Carta", {state: { rut: cliente[0].tableId, correo: cliente[0].email, cliente: cliente[0].clientId }}, [navigate])
  );
  const { rut } = reserva;

  const handleInputChange = (e) => {
    const changedFormValue = {
      ...reserva,
      [e.target.name]: e.target.value,
      //key:key
    };
    setReserva(changedFormValue);
  };

  const searchUser = async () => {
    await getUserByRut(reserva.rut).then(data => cliente=data);  
  };
  const sendPage = async () => {
    setTimeout(()=>{
      if (cliente[0] != undefined) {
        handleOnclick();
        console.log('wait')
      } else {
        setShowAlert(true);
      }
  }, 2000);
    
    
  };


  const handleSubmit = (e) => {
    searchUser().then(sendPage());
    e.preventDefault();
    
    
  };

  return (
    <>
      {showAlert ? (
        <Alert severity="error">
          <AlertTitle>Usuario sin reserva</AlertTitle>
          El usuario no registra reserva activa
        </Alert>
      ) : (
        <></>
      )}

      <div style={{ width: 350 }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa tu Correo"
              value={rut}
              name="rut"
              onChange={handleInputChange}
            />
          </div>

          <div className="d-grid" style={{ margin: 20 }}>
            <button type="submit" className="btn btn-primary">
              Ordenar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default OrderForm;
