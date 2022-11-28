import axios from "axios";
import download from 'downloadjs'

import { baseUrlCliente, config, baseUrlBodega } from "./Config";

const addClient = async (client) => {
  //peticion con valor desde body
  console.log(client);
  const res = await axios.post(baseUrlCliente + "/Client", client, config);
  console.log(res);
  return res.data;
};

const getClient = async () => {
  //peticion con valor desde body
  const res = await axios.get(baseUrlCliente + "/Client", config);
  return res.data;
};

const addOrder = async (order, rut) => {
  const res = await axios.post(
    baseUrlCliente + "/Client/byEmail/" + rut + "/order",
    order,
    config
  );
  console.log(res);
  return res.data;
};

const getDish = async () => {
  //peticion con valor desde body
  const res = await axios.get(baseUrlBodega + "/obtener/receta");
  console.log(res);
  return res.data;
};

const getDishHabilitadas = async () => {
  //peticion con valor desde body
  const res = await axios.get(baseUrlBodega + "/obtener/recetasHabilitadas");
  console.log(res);
  return res.data;
};

const getProduct = async () => {
  //peticion con valor desde body
  const res = await axios.get(baseUrlBodega + "/obtener/productos");
  console.log(res);
  return res.data;
};

const getUserByRut = async (rut) => {
  //peticion con valor desde body
  const res = await axios.get(
    baseUrlCliente + "/Client/byEmail/" + rut,
    config
  );
  console.log(res);
  return res.data;
};

const getOrderByRut = async (rut) => {
  //peticion con valor desde body
  const res = await axios.get(
    baseUrlCliente + "/Client/order/byTable/" + rut,
    config
  );
  console.log(res);
  return res.data;
};

const getBoleta = async (id) => {
  //peticion con valor desde body
  await axios.get(
    baseUrlCliente + "/Client/generateOrderpdf/byTable/" + id,
    {
      headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjAwMDAwMDAxLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBbnRvbmlvIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoicmlxdWVsbWVhbnRvbmlvOTBAZ21haWwuY29tIiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiJIQlFYRlVLT09TU0NDT0o3SEM0TEFQNlFMSlFBUFdGNSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjY5Njg3NTI5LCJpc3MiOiJsb2NhbGhvc3Q6ODA4MCIsImF1ZCI6ImxvY2FsaG9zdDo4MDgwIn0.JA3zsblgcjIEg2rF0htJ2egNs-dhLe6y7hJHP-Ft7TI'},
      responseType: 'blob',
  }
  ).then(response => {
    const content = response.headers['content-type'];
    download(response.data, "boleta", content)
 })
 .catch(error => console.log(error));
};

const getAllOrders = async () => {
  //peticion con valor desde body
  const res = await axios.get(
    baseUrlCliente + "/Client/priorizedOrders",
    config
  );
  console.log(res);
  return res.data;
};

const finishOrders = async (body) => {
  //peticion con valor desde body
  const res = await axios.patch(
    baseUrlCliente + "/Client/" + body.orderId + "/order/Finished",
    body,
    config
  );
  console.log(res);
  return res.data;
};

const PrepareOrders = async (body) => {
  //peticion con valor desde body
  const res = await axios.patch(
    baseUrlCliente + "/Client/" + body.orderId + "/order/Prepare",
    body,
    config
  );
  console.log(res);
  return res.data;
};

const actualizarStock = async (recetaId) => {
  //peticion con valor desde body
  const res = await axios.get(
    baseUrlBodega + "/actualizarStock/" + recetaId,
    config
  );
  return res.data;
};

const sumarStock = async (recetaId) => {
  //peticion con valor desde body
  const res = await axios.get(
    baseUrlBodega + "/sumarStock/" + recetaId,
    config
  );
  return res.data;
};

export {
  addClient,
  getClient,
  getDish,
  addOrder,
  getUserByRut,
  getOrderByRut,
  getAllOrders,
  finishOrders,
  getDishHabilitadas,
  actualizarStock,
  PrepareOrders,
  getProduct,
  sumarStock,
  getBoleta
};
