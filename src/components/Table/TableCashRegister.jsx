import React, { useState, useEffect } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import "./Table.css";
import { addCashRegister, closeCashRegister, disableCashRegister, enableCashRegister, getCashRegister, openCashRegister } from "../../services/Finances";

var body = [];

const TableCashRegister = ({ cashRegister, setCashRegister }) => {
  const [data, setData] = useState(cashRegister);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsEnable, setModalIsEnable] = useState(false);

  useEffect(()=>{
    console.log("hola")
    console.log("desde tabla: "+cashRegister)
},[])
  

  const [cashRegisterSeleccionado , setCashRegisterSeleccionado] = useState({
    enabled: "",
    isOpen: "",
    totalIncome: "",
  });

  const seleccionarCashRegister = (elemento, caso) => {
    setCashRegisterSeleccionado(elemento);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  const deshabilitar = async (cashRegister) => {
    await disableCashRegister(cashRegister.id);
    setData(await getCashRegister());
    setModalIsEnable(false);
  };

  const habilitar = async (cashRegister) => {
    await enableCashRegister(cashRegister.id);
    setData(await getCashRegister());
    setModalIsEnable(false);
  };

  const cerrar = async (cashRegister) => {
    await closeCashRegister(cashRegister.id);
    setData(await getCashRegister());
    setModalIsOpen(false);
  };

  const abrir = async (cashRegister) => {
    await openCashRegister(cashRegister.id);
    setData(await getCashRegister());
    setModalIsOpen(false);
  };

  const abrirModalInsertar = () => {
    //setCashRegisterSeleccionado(null);
    setModalInsertar(true);
  };

  const insertar = async () => {
    await addCashRegister();
    setData(await getCashRegister());
    setModalInsertar(false);
  };

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />
      <button className="btn btn-success" onClick={() => abrirModalInsertar()}>
        Insertar
      </button>
      <br />
      <br />
      <user className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Estado</th>
            <th>Activa</th>
            <th>Ganacias</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elemento) => (
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.enabled ? "Habilitada" : "Deshabilitada"} </td>
              <td>{elemento.isOpen ? "Abierta" : "Cerrada"}</td>
              <td>{elemento.totalIncome}</td>
              <td>
                {elemento.enabled ? (
                  <button
                    className="btn btn-danger"
                    style={{ margin: 10 }}
                    onClick={() => {setModalIsEnable(true); setCashRegisterSeleccionado(elemento)}}
                  >
                    Deshabilitar
                  </button>
                ) : (
                  <button
                    className="btn btn-danger"
                    style={{ margin: 10 }}
                    onClick={() => {setModalIsEnable(true); setCashRegisterSeleccionado(elemento)}}
                  >
                    Habilitar
                  </button>
                )}
                {elemento.enabled ? <>{elemento.isOpen ? (
                  <button
                    className="btn btn-danger"
                    style={{ margin: 10 }}
                    onClick={() => {setModalIsOpen(true); setCashRegisterSeleccionado(elemento)}}
                  >
                    Cerrar
                  </button>
                ) : (
                  <button
                    className="btn btn-danger"
                    style={{ margin: 10 }}
                    onClick={() => {setModalIsOpen(true); setCashRegisterSeleccionado(elemento)}}
                  >
                    Abrir
                  </button>
                )}</>:<></>} 
              </td>
            </tr>
          ))}
        </tbody>
      </user>

      <Modal isOpen={modalIsOpen}>
        {cashRegisterSeleccionado.isOpen ? (
          <ModalBody>
            Estás Seguro que deseas cerrar la caja:{" "}
            {cashRegisterSeleccionado && cashRegisterSeleccionado.id}
          </ModalBody>
        ) : (
          <ModalBody>
            Estás Seguro que deseas abrir la caja:{" "}
            {cashRegisterSeleccionado && cashRegisterSeleccionado.id}
          </ModalBody>
        )}

        <ModalFooter>
          {cashRegisterSeleccionado.isOpen ? (
            <button
              className="btn btn-danger"
              onClick={() => cerrar(cashRegisterSeleccionado)}
            >
              Sí
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => abrir(cashRegisterSeleccionado)}
            >
              Sí
            </button>
          )}

          <button
            className="btn btn-secondary"
            onClick={() => setModalIsOpen(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalIsEnable}>
        {cashRegisterSeleccionado.enabled ? (
          <ModalBody>
            Estás Seguro que deseas deshabilitar la caja:{" "}
            {cashRegisterSeleccionado && cashRegisterSeleccionado.id}
          </ModalBody>
        ) : (
          <ModalBody>
            Estás Seguro que deseas habilitar la caja:{" "}
            {cashRegisterSeleccionado && cashRegisterSeleccionado.id}
          </ModalBody>
        )}

        <ModalFooter>
          {cashRegisterSeleccionado.enabled ? (
            <button
              className="btn btn-danger"
              onClick={() => deshabilitar(cashRegisterSeleccionado)}
            >
              Sí
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => habilitar(cashRegisterSeleccionado)}
            >
              Sí
            </button>
          )}

          <button
            className="btn btn-secondary"
            onClick={() => setModalIsEnable(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar Caja</h3>
          </div>
        </ModalHeader>
        <ModalBody>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => insertar()}>
            Insertar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalInsertar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default TableCashRegister;
