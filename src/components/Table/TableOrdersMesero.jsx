import React, { useState } from "react";
import "./Table.css";
import { finishOrders, getAllOrders, PrepareOrders } from "../../services/Cliente";

const TableOrdersMesero = ({ mesas, setMesas }) => {
  const [data, setData] = useState(mesas);

  const [mesaSeleccionado, setMesaSeleccionado] = useState({
    id: "",
    dish: "",
    table: "",
  });


  const insertar = async (elemento) => {
    setMesaSeleccionado(elemento);
    var valorInsertar = {
      clientId: elemento.clientId,
      orderId: elemento.orderId,
    };
    console.log(valorInsertar)
    await finishOrders(valorInsertar);
    setData(await getAllOrders());
  };

  const preparar = async (elemento) => {
    setMesaSeleccionado(elemento);
    var valorInsertar = {
      clientId: elemento.clientId,
      orderId: elemento.orderId,
    };
    console.log(valorInsertar)
    await PrepareOrders(valorInsertar);
    setData(await getAllOrders());
  };

  const seleccionarMesa = (elemento) => {
    setMesaSeleccionado(elemento);
    
  };

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p className="p__cormorant" style={{ color: '#E76F51', margin: '2rem 0' }}>Entregar a mesa</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Plato</th>
            <th>Mesa</th>
            <th>Entregar</th>
          </tr>
        </thead>
        <tbody>
          {data[0]!==undefined ? (
            <>
              {data[1] != undefined ? (
                <>
                  {data.map((e) =>
                    e.map((elemento) => (
                      <tr>
                        <td>{elemento.dish}</td>
                        {/* <td>{getName(elemento.tableId) }</td> */}
                        <td>{elemento.tableName}</td>
                        <td><button
                          className="btn btn-primary"
                          style={{ margin: 10 }}
                        >
                          Entregado
                        </button> </td>
                      </tr>
                    ))
                  )}
                </>
              ) : (
                <>
                  {data[0].map((elemento) => (
                    <tr>
                      <td>{elemento.dish}</td>
                      {/* <td>{getName(elemento.tableId) }</td> */}
                      <td>{elemento.tableName}</td>
                      <td><button
                          className="btn btn-primary"
                          style={{ margin: 10 }}
                        >
                          Entregado
                        </button> </td>
                    </tr>
                  ))}
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default TableOrdersMesero;
