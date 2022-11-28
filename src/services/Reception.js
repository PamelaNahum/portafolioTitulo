import axios from 'axios';

import { baseUrlCliente, config } from './Config';

const activateReserve = async(id)=>{
    //peticion con valor desde body
    const res = await axios.patch(baseUrlCliente+"/Client/"+id+"/reservation/start", config);
    console.log(res)
    return res.data;
}

const finishedReserve = async(id)=>{
    //peticion con valor desde body
    const res = await axios.patch(baseUrlCliente+"/Client/"+id+"/reservation/finish", config);
    console.log(res)
    return res.data;
}




export {activateReserve, finishedReserve};