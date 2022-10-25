import axios from 'axios';

import { baseUrlCliente, config } from './Config';

const addClient = async(table)=>{
    //peticion con valor desde body
    const res = await axios.post(baseUrlCliente+"/Table", table, config);
    console.log(res)
    return res.data;
}

const getClient = async()=>{
    //peticion con valor desde body
    const res = await axios.get(baseUrlCliente+"/Client",config);
    return res.data;
}




export {addClient, getClient};