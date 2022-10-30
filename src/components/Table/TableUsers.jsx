import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { BsArrowRightShort } from "react-icons/bs";
import "./Table.css";
import { addUser, disableUser, enableUser, getUser, } from "../../services/User";

var body = [];

const TableUsers = ({ users, setUsers }) => {
  const [data, setData] = useState(users);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  

  const [userSeleccionado, setUserSeleccionado] = useState({
    name: "",
    lastName: "",
    rut: "",
    email: "",
    password: "",
  });

  const seleccionarUser = (elemento, caso) => {
    setUserSeleccionado(elemento);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setUserSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const eliminar = async (user) => {
    body={
      userId: user.id
    }
    await enableUser(user.id, body);
    setData(await getUser());
    setModalEliminar(false);
  };

  const habilitar = async (user) => {
    body={
      userId: user.id
    }
    await disableUser(user.id, body);
    setData(await getUser());
    setModalEliminar(false);
  };

  const abrirModalInsertar = () => {
    //setUserSeleccionado(null);
    setModalInsertar(true);
  };

  const insertar = async () => {
    var valorInsertar = {
      name: userSeleccionado.name,
      lastname: userSeleccionado.lastName,
      rut: userSeleccionado.rut,
      email: userSeleccionado.email,
      password: userSeleccionado.password,
      birthDate: "2022-10-30T02:39:59.665Z",
      isValid: true,
    };
    console.log(valorInsertar);
    await addUser(valorInsertar);
    setData(await getUser());
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
            <th>Nombre</th>
            <th>Rut</th>
            <th>Email</th>
            <th>Valido</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elemento) => (
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.name} {elemento.lastName}</td>
              <td>{elemento.rut}</td>
              <td>{elemento.email}</td>
              <td>{elemento.isValid ? "Deshabilitado" : "Habilitado"}</td>
              <td>
                {elemento.isEnabled ? (
                  <button
                    className="btn btn-danger"
                    style={{ margin: 10 }}
                    onClick={() => seleccionarUser(elemento, "Habilitar")}
                  >
                    Habilitar
                  </button>
                ) : (
                  <button
                    className="btn btn-danger"
                    style={{ margin: 10 }}
                    onClick={() => seleccionarUser(elemento, "Eliminar")}
                  >
                    Deshabilitar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </user>

      <Modal isOpen={modalEliminar}>
        {userSeleccionado.isEnabled ? (
          <ModalBody>
            Estás Seguro que deseas habilitar el usuario:{" "}
            {userSeleccionado && userSeleccionado.name}
          </ModalBody>
        ) : (
          <ModalBody>
            Estás Seguro que deseas deshabilitar el usuario:{" "}
            {userSeleccionado && userSeleccionado.name}
          </ModalBody>
        )}

        <ModalFooter>
          {userSeleccionado.isEnabled ? (
            <button
              className="btn btn-danger"
              onClick={() => habilitar(userSeleccionado)}
            >
              Sí
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => eliminar(userSeleccionado)}
            >
              Sí
            </button>
          )}

          <button
            className="btn btn-secondary"
            onClick={() => setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar Usuario</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={userSeleccionado ? userSeleccionado.name : ""}
              onChange={handleChange}
            />
            <br />

            <label>Apellido</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              value={userSeleccionado ? userSeleccionado.lastName : ""}
              onChange={handleChange}
            />
            <br />
            <label>Rut</label>
            <input
              className="form-control"
              type="text"
              name="rut"
              value={userSeleccionado ? userSeleccionado.rut : ""}
              onChange={handleChange}
            />
            <br />
            <label>email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              value={userSeleccionado ? userSeleccionado.email : ""}
              onChange={handleChange}
            />
            <br />
            <label>Contraseña</label>
            <input
              className="form-control"
              type="text"
              name="password"
              value={userSeleccionado ? userSeleccionado.password : ""}
              onChange={handleChange}
            />
            <br />
          </div>
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
export default TableUsers;
