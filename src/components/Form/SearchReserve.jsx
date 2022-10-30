import React, { useCallback, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { activateReserve, searchUser } from "../../services/Reception";
import { getUserByRut } from "../../services/Cliente";

const initialReserva = [
  {
    rut: "",
  },
];

const SearchReserve = () => {
  const [reserva, setReserva] = useState(initialReserva);
  const [user, setUser] = useState([
    { name: "", lastName: "", reservationDatetime: "" },
  ]);
  const [activar, setActivar] = useState(false);
  const { rut } = reserva;
  const getUser = async () => {
    console.log(reserva.rut);
    setUser(await getUserByRut(reserva.rut));
  };
  const startReserve = async () => {
    console.log(user);
    await activateReserve(user[0].clientId);
  };

  const handleInputChange = (e) => {
    const changedFormValue = {
      [e.target.name]: e.target.value,
      //key:key
    };
    setReserva(changedFormValue);
  };

  const handleOnclick = () => {
    startReserve();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser();
    setActivar(true);
  };

  return (
    <>
      <div style={{ width: 350 }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa rut del cliente"
              value={rut}
              name="rut"
              onChange={handleInputChange}
            />
          </div>

          <div className="d-grid" style={{ margin: 20 }}>
            <button type="submit" className="btn btn-primary">
              Buscar
            </button>
          </div>
        </form>
      </div>
      <Modal isOpen={activar}>
        <ModalHeader>
          <div>
            <h3>Reserva</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          {user[0] === undefined ? (
            <div className="form-group">
            <p>El Cliente no tiene reservas para activar</p>
            <br />
          </div>
            
          ) : (
            <div className="form-group">
              <p>
                El Cliente {user[0].name} {user[0].lastName} tiene una reserva
                el día {user[0].reservationDatetime}
              </p>
              <br />
            </div>
            
          )}
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-primary"
            onClick={() => {
              setActivar(false);
              handleOnclick();
            }}
          >
            Activar
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setActivar(false);
            }}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default SearchReserve;
