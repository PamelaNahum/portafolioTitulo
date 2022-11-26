import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { BsArrowRightShort } from "react-icons/bs";
import "./Table.css";
import { addUser, disableUser, enableUser, getUser } from "../../services/User";
import { addProvider, getProvider } from "../../services/Tables";

var body = [];

const TableProvider = ({ users, setUsers }) => {
  const [data, setData] = useState(users);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [userSeleccionado, setUserSeleccionado] = useState({
    businessName: "",
    coreBusiness: "",
    rut: "",
    address: "",
    phoneNumber: "",
    email: "",
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
    body = {
      userId: user.id,
    };
    await enableUser(user.id);
    setData(await getUser());
    setModalEliminar(false);
  };

  const habilitar = async (user) => {
    body = {
      userId: user.id,
    };
    await disableUser(user.id);
    setData(await getUser());
    setModalEliminar(false);
  };

  const abrirModalInsertar = () => {
    //setUserSeleccionado(null);
    setModalInsertar(true);
  };

  const insertar = async () => {
    var valorInsertar = {
      businessName: userSeleccionado.businessName,
      coreBusiness: userSeleccionado.coreBusiness,
      rut: userSeleccionado.rut,
      address: userSeleccionado.address,
      phoneNumber: userSeleccionado.phoneNumber,
      email: userSeleccionado.email,
    };
    console.log(valorInsertar);
    await addProvider(valorInsertar);
    setData(await getProvider());
    setModalInsertar(false);
  };

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />
      <p
        className="p__cormorant"
        style={{ color: "#E76F51", margin: "2rem 0" }}
      >
        Mantenedor de Proveedores
      </p>
      <button className="btn btn-success" onClick={() => abrirModalInsertar()}>
        Insertar
      </button>
      <br />
      <br />
      <user className="table table-bordered">
        <thead>
          <tr>
            <th>Negocio</th>
            <th>Core</th>
            <th>Rut</th>
            <th>Dirección</th>
            <th>Número</th>
            <th>Email</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elemento) => (
            <tr>
              <td>
                {elemento.businessName}
              </td>
              <td>{elemento.coreBusiness}</td>
              <td>{elemento.rut}</td>
              <td>{elemento.address}</td>
              <td>{elemento.phoneNumber}</td>
              <td>{elemento.email}</td>
              <td><button
                    className="btn btn-danger"
                    style={{ margin: 10 }}
                    onClick={() => seleccionarUser(elemento, "Editar")}
                  >
                    Editar
                  </button>
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
            <h3>Insertar Proveedor</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Negocio</label>
            <input
              className="form-control"
              type="text"
              name="businessName"
              value={userSeleccionado ? userSeleccionado.businessName : ""}
              onChange={handleChange}
            />
            <br />

            <label>Core</label>
            <input
              className="form-control"
              type="text"
              name="coreBusiness"
              value={userSeleccionado ? userSeleccionado.coreBusiness : ""}
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
            <label>Dirección</label>
            <input
              className="form-control"
              type="text"
              name="address"
              value={userSeleccionado ? userSeleccionado.address : ""}
              onChange={handleChange}
            />
            <br />
            <label>Número</label>
            <input
              className="form-control"
              type="text"
              name="phoneNumber"
              value={userSeleccionado ? userSeleccionado.phoneNumber : ""}
              onChange={handleChange}
            />
            <br />
            <label>Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              value={userSeleccionado ? userSeleccionado.email : ""}
              onChange={handleChange}
            />
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
export default TableProvider;
