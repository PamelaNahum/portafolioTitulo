import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { BsArrowRightShort } from "react-icons/bs";
import "./Table.css";
import { addUser, disableUser, enableUser, getUser } from "../../services/User";
import { addOrderProvider, addProvider, getOrderProvider, getProvider, setOrderProviderCancel, setOrderProviderReceived } from "../../services/Tables";
import { sumarStock } from "../../services/Cliente";

var body = [];

const TableOrderProvider = ({ users, setUsers, proveedor, producto }) => {
  const [data, setData] = useState(users);
  const [proveedores, setProveedores] = useState(proveedor);
  const [productos, setProductos] = useState(producto);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [userSeleccionado, setUserSeleccionado] = useState({
    providerId: "",
    productId: "",
    amount: "",
    state: "",
    price: "",
  });

  /* const seleccionarUser = (elemento, caso) => {
    setUserSeleccionado(elemento);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  }; */

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setUserSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(userSeleccionado);
  };

  const cancelar = async (user) => {
    await setOrderProviderCancel(userSeleccionado.id);
    setData(await getOrderProvider());
    setModalEliminar(false);
  };

  const habilitar = async (user) => {
    await setOrderProviderReceived(user.id);
    await sumarStock(user.productId);
    setData(await getOrderProvider());
  };

  const abrirModalInsertar = () => {
    //setUserSeleccionado(null);
    setModalInsertar(true);
  };

  const insertar = async () => {
    var valorInsertar = {
    providerId: userSeleccionado.providerId,
    productId: userSeleccionado.productId,
      amount: parseInt( userSeleccionado.amount),
      price: parseInt(userSeleccionado.price),
    };
    console.log(valorInsertar);
    await addOrderProvider(valorInsertar);
    setData(await getOrderProvider());
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
        Ordenes a proveedores
      </p>
      <button className="btn btn-success" onClick={() => abrirModalInsertar()}>
        Insertar
      </button>
      <br />
      <br />
      <user className="table table-bordered">
        <thead>
          <tr>
            <th>Id proveedor</th>
            <th>Id Producto</th>
            <th>Monto</th>
            <th>Estado</th>
            <th>Precio</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elemento) => (
            <tr>
              <td>
                {elemento.providerid}
              </td>
              <td>{elemento.productId}</td>
              <td>{elemento.amount}</td>
              <td>{elemento.state}</td>
              <td>{elemento.price}</td>
              <td><button
                    className="btn btn-danger"
                    style={{ margin: 10 }}
                    onClick={() => habilitar(elemento)}
                  >
                    Recibido
                  </button>
                  <button
                    className="btn btn-danger"
                    style={{ margin: 10 }}
                    onClick={() => {setModalEliminar(true); setUserSeleccionado(elemento)}}
                  >
                    Cancelar
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </user>

      <Modal isOpen={modalEliminar}>
          <ModalBody>
            ¿Estás Seguro que deseas cancelar esta orden?
          </ModalBody>

        <ModalFooter>
          
            <button
              className="btn btn-danger"
              onClick={() => cancelar(userSeleccionado)}
            >
              Sí
            </button>

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
            <h3>Crear pedido</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
          <label>Producto</label>
          <br />
          <select 
          name="productId"
          value={userSeleccionado.productId} onChange={handleChange}
          style={{width:'100%'}}>
          {producto.map(elemento=>
               ( <option value={elemento.id}>{elemento.nombre} </option>)
              )}
          </select>
          <br />
          <br />
          <label>Proveedor</label>
          
          <br />
          <select 
          name="providerId"
          value={userSeleccionado ? userSeleccionado.providerId : ""} onChange={handleChange}
          style={{width:'100%'}}>
          {proveedor.map(elemento=>
               ( <option value={elemento.id}>Sector: {elemento.businessName} / Core: {elemento.core} / email: {elemento.email}  </option>)
              )}
          </select>
          <br />
          <br />
            <label>Cantidad</label>
            <input
              className="form-control"
              type="numeric"
              name="amount"
              value={userSeleccionado ? userSeleccionado.amount : ""}
              onChange={handleChange}
            />
            <br />

            <label>Precio</label>
            <input
              className="form-control"
              type="numeric"
              name="price"
              value={userSeleccionado ? userSeleccionado.price : ""}
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
export default TableOrderProvider;
