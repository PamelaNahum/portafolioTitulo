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
    const res = await axios.post(baseUrlCliente+"/Client/byRut/"+rut+"/order", order, config);
    console.log(res)
    return res.data;
}

const getDish = async()=>{
    //peticion con valor desde body
    const res = await axios.get(baseUrlBodega+"/obtener/receta");
    console.log(res)
    return res.data;
}

const getUserByRut = async(rut)=>{
    //peticion con valor desde body
    const res = await axios.get(baseUrlCliente+"/Client/byRut/"+rut, config);
    console.log(res)
    return res.data;
}

const getOrderByRut = async(rut)=>{
    //peticion con valor desde body
    const res = await axios.get(baseUrlCliente+"/Client/order/byRut/"+rut, config);
    console.log(res)
    return res.data;
}

const getAllOrders = async()=>{
    //peticion con valor desde body
    const res = await axios.get(baseUrlCliente+"/Client/orders", config);
    console.log(res)
    return res.data;
}

const finishOrders = async(body)=>{
    //peticion con valor desde body
    const res = await axios.post(baseUrlCliente+"/Client/"+body.orderId+"/order/Finished",body, config);
    console.log(res)
    return res.data;
}




export {addClient, getClient, getDish, addOrder, getUserByRut, getOrderByRut, getAllOrders, finishOrders};