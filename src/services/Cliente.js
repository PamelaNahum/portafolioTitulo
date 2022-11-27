import axios from 'axios';

import { baseUrlCliente, config, baseUrlBodega } from './Config';

const addClient = async(client)=>{
    //peticion con valor desde body
    console.log(client);
    const res = await axios.post(baseUrlCliente+"/Client", client, config);
    console.log(res)
    return res.data;
}

const getClient = async()=>{
    //peticion con valor desde body
    const res = await axios.get(baseUrlCliente+"/Client",config);
    return res.data;
}

const addOrder = async(order, rut)=>{
    const res = await axios.post(baseUrlCliente+"/Client/byEmail/"+rut+"/order", order, config);
    console.log(res)
    return res.data;
}

const getDish = async()=>{
    //peticion con valor desde body
    const res = await axios.get(baseUrlBodega+"/obtener/receta");
    console.log(res)
    return res.data;
}

const getDishHabilitadas = async()=>{
    //peticion con valor desde body
    const res = await axios.get(baseUrlBodega+"/obtener/recetasHabilitadas");
    console.log(res)
    return res.data;
}

const getUserByRut = async(rut)=>{
    //peticion con valor desde body
    const res = await axios.get(baseUrlCliente+"/Client/byEmail/"+rut, config);
    console.log(res)
    return res.data;
}

const getOrderByRut = async(rut)=>{
    //peticion con valor desde body
    const res = await axios.get(baseUrlCliente+"/Client/order/byTable/"+rut, config);
    console.log(res)
    return res.data;
}

const getAllOrders = async()=>{
    //peticion con valor desde body
    const res = await axios.get(baseUrlCliente+"/Client/priorizedOrders", config);
    console.log(res)
    return res.data;
}

const finishOrders = async(body)=>{
    //peticion con valor desde body
    const res = await axios.patch(baseUrlCliente+"/Client/"+body.orderId+"/order/Finished",body, config);
    console.log(res)
    return res.data;
}

const PrepareOrders = async(body)=>{
    //peticion con valor desde body
    const res = await axios.patch(baseUrlCliente+"/Client/"+body.orderId+"/order/Prepare",body, config);
    console.log(res)
    return res.data;
}

const actualizarStock = async (recetaId) => {
    //peticion con valor desde body
    const res = await axios.get(baseUrlBodega + "/actualizarStock/"+recetaId, config);
    return res.data;
  };




export {addClient, getClient, getDish, addOrder, getUserByRut, getOrderByRut, getAllOrders, finishOrders, getDishHabilitadas, actualizarStock, PrepareOrders};