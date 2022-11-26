import React, { useState, useEffect, useCallback } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BsX } from "react-icons/bs";
import "../Dish/Dish.css";
import { addOrder } from "../../services/Cliente";
import { useNavigate } from "react-router-dom";
import { movement } from "../../services/Finances";
import { actualizarStock } from "../../services/Cliente";

var total = 0;
var data ={};

const CardFood = ({ dishes, rut, preOrder, client }) => {
  const [reservaCreada, setReservaCreada] = useState(false);
  const [showOrderReady, setShowOrderReady] = useState(false);
  const [showPayReady, setShowPayReady] = useState(false);
  const [showPedir, setShowPedir] = useState(false);
  const [modalPago, setModalPago] = useState(false);
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const handleOnclick = useCallback(() => navigate("/", {}, [navigate]));
  const fechaHoy = new Date().toISOString;

  useEffect(() => {
    total=0;
    console.log('preOrder',preOrder);
    console.log('cliente id',client);
    preOrder[0].map((elem) => (total = total + elem.price));
  }, []);

  const handleInputChange = (plato) => {
    const dish = { clientId: client, dishId: plato.id, dish: plato.nombre, amount: 1, price: plato.precio };
    list.push(dish);
    setShowPedir(true);
    total = total + plato.precio;
    console.log("why"+list);
  };

  const pagar = async () => {
    console.log(data)
    data = {
      cashRegisterId: "93fd0371-50ad-49a7-8e25-a31ea652c64b",
      description: "descripcion",
      amount: total,
      isIncome: true,
      date: fechaHoy,
    };
    console.log(fechaHoy)
    await movement(data, "93fd0371-50ad-49a7-8e25-a31ea652c64b").then (() => 
      {setModalPago(false)
      setShowPayReady(true)}
    );

  };

  const actualizar = async(id)=>{
    await actualizarStock(id)
  }

  const ordenar = async () => {
    const id = rut;
    console.log(list);
    list.map(elemento => {actualizar(elemento.dishId)} )
    await addOrder(list, id).then(() => {
      setShowPedir(false);
      setShowOrderReady(true);
    });
  };

  return (
    <>
      {showOrderReady ? (
        <Modal isOpen={showOrderReady}>
        <ModalHeader>
          <div>
            <h3 >Pedido realizado con exito</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">

            <p>El pedido se ha realizado con éxito, pronto recibirá el plato en su mesa</p>
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-primary"
            onClick={()=>{setReservaCreada(false); handleOnclick()}}
          >
            Aceptar
          </button>
        </ModalFooter>
      </Modal>
      ) : (
        <></>
      )}
      {showPayReady ? (
        <Modal isOpen={showPayReady}>
        <ModalHeader>
          <div>
            <h3 >Pago realizado con exito</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">

            <p>El pago se a realizado con exito, Gracias por preferirnos</p>
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-primary"
            onClick={()=>{setReservaCreada(false); handleOnclick()}}
          >
            Aceptar
          </button>
        </ModalFooter>
      </Modal>
      ) : (
        <></>
      )}
      {showPedir ? (
        <button class="btn-flotante" style={{marginBottom:70}} onClick={() => setReservaCreada(true)}>
          Pedir
        </button>
      ) : (
        <></>
      )}
      {preOrder[0] != undefined ? (
        <button class="btn-flotante" onClick={() => setModalPago(true)}>
          Pagar
        </button>
      ) : (
        <></>
      )}
      {dishes[0] !== undefined ? <>{dishes.map((element) => (
        <Card sx={{ maxWidth: 300, margin: 10 }}>
          <CardMedia
            component="img"
            height="140"
            image={require("../../assets/images/charquican.jpg")}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {element.nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {element.detalle}
            </Typography>
            <br />
            <Typography variant="body2" color="text.secondary">
              ${element.precio}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              style={{ color: "#F05742" }}
              onClick={() => handleInputChange(element)}
            >
              Ordenar
            </Button>
          </CardActions>
        </Card>
      ))}</>: <></>}
      

      <Modal isOpen={reservaCreada}>
        <ModalHeader>
          <div>
            <h3>Platos a ordenar</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            {preOrder[0].map((elem) => (
              <div style={{ flexDirection: "row", display: "flex" }}>
                <div>
                  <h5>{elem.dish}</h5>
                  <p>precio: ${elem.price}</p>
                </div>
                <div></div>
              </div>
            ))}
            {list.map((elem) => (
              <div style={{ flexDirection: "row", display: "flex" }}>
                <div>
                  <h5>{elem.dish}</h5>
                  <p>precio: ${elem.price}</p>
                </div>
                <div>
                  <BsX
                    color="red"
                    fontSize={30}
                    style={{ marginLeft: 10 }}
                    onClick={() => {
                      setList(list.filter((item) => item.dish !== elem.dish));
                      total = total - elem.price;
                    }}
                  />
                </div>
              </div>
            ))}
            <p>Total: ${total}</p>
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-primary"
            onClick={() => {
              ordenar();
            }}
          >
            Ordenar
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setReservaCreada(false);
            }}
          >
            Seguir Ordenando
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalPago}>
        <ModalHeader>
          <div>
            <h3>Pagar</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            {preOrder[0].map((elem) => (
              <div style={{ flexDirection: "row", display: "flex" }}>
                <div>
                  <h5>{elem.dish}</h5>
                  <p>precio: ${elem.price}</p>
                </div>
                <div></div>
              </div>
            ))}
            <p>Total a pagar: ${total}</p>
            <br />
            <p>Seleccione método de pago</p>
            <select 
          style={{width:'70%'}}>
             <option value="Efectivo">Efectivo</option>
             <option value="Tarjeta">Tarjeta</option>
          </select>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-primary"
            onClick={() => {
              pagar();
            }}
          >
            Pagar
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setModalPago(false);
            }}
          >
            Seguir Ordenando
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default CardFood;
