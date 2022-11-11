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
import { Alert } from "@mui/material";
import { AlertTitle } from "@mui/material";
import { movement } from "../../services/Finances";

var total = 0;
var data ={};

const CardFood = ({ dishes, rut, preOrder }) => {
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
    console.log(preOrder);
    preOrder[0].map((elem) => (total = total + elem.price));
  }, []);

  const handleInputChange = (plato) => {
    const dish = { dish: plato.nombre, amount: 1, price: plato.precio };
    list.push(dish);
    setShowPedir(true);
    total = total + plato.precio;
    console.log("why"+list);
  };

  const pagar = async () => {
    console.log(data)
    data = {
      cashRegisterId: "4de9c6eb-f644-4d3f-94d5-24ccd108ea93",
      description: "descripcion",
      amount: total,
      isIncome: true,
      date: fechaHoy,
    };
    console.log(fechaHoy)
    await movement(data, "4de9c6eb-f644-4d3f-94d5-24ccd108ea93").then (() => 
      {setModalPago(false)
      setShowPayReady(true)}
    );
    setTimeout(() => {
      handleOnclick();
    }, 2000);

  };

  const ordenar = async () => {
    const id = rut;
    console.log(list);
    await addOrder(list, id).then(() => {
      setShowPedir(false);
      setShowOrderReady(true);
    });

    setTimeout(() => {
      handleOnclick();
    }, 2000);
  };

  return (
    <>
      {showOrderReady ? (
        <Alert severity="success">
          <AlertTitle>Se ha realizado la orden con exito</AlertTitle>
          Pronto recibirá su pedido en su mesa
        </Alert>
      ) : (
        <></>
      )}
      {showPayReady ? (
        <Alert severity="success">
          <AlertTitle>Se ha realizado el pago con exito</AlertTitle>
          Gracias por preferirnos, vuelva pronto
        </Alert>
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
      {dishes.map((element) => (
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
      ))}

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
            Serguir Ordenando
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
              setReservaCreada(false);
            }}
          >
            Serguir Ordenando
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default CardFood;
