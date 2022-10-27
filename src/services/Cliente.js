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

const addOrder = async(order, clientId)=>{
    const res = await axios.post(baseUrlCliente+"/Client/"+clientId+"/order", order, config);
    console.log(res)
    return res.data;
}

const getDish = async()=>{
    //peticion con valor desde body
    const res = await axios.get(baseUrlBodega+"/obtener/receta");
    console.log(res)
    return res.data;
}






export {addClient, getClient, getDish, addOrder};