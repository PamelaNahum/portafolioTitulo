import axios from 'axios';

import { baseUrlFinanzas, config} from './Config';

const movement = async(data,id)=>{
    //peticion con valor desde body
    const res = await axios.post(baseUrlFinanzas+"/CashRegister/"+id+"/movement", data, config);
    console.log(res)
    return res.data;
}

const getCashRegister = async()=>{
    //peticion con valor desde body
    const res = await axios.get(baseUrlFinanzas+"/CashRegister", config);
    console.log(res.data)
    return res.data;
}

const getCashRegisterOpen = async()=>{
    //peticion con valor desde body
    const res = await axios.get(baseUrlFinanzas+"/CashRegister/open", config);
    console.log(res)
    return res.data;
}

const addCashRegister = async()=>{
    //peticion con valor desde body
    const res = await axios.post(baseUrlFinanzas+"/CashRegister", config);
    console.log(res)
    return res.data;
}

const openCashRegister = async(id)=>{
    //peticion con valor desde body
    const res = await axios.patch(baseUrlFinanzas+"/CashRegister/"+id+"/open", config);
    console.log(res)
    return res.data;
}

const closeCashRegister = async(id)=>{
    //peticion con valor desde body
    const res = await axios.patch(baseUrlFinanzas+"/CashRegister/"+id+"/close", config);
    console.log(res)
    return res.data;
}

const enableCashRegister = async(id)=>{
    //peticion con valor desde body
    const res = await axios.patch(baseUrlFinanzas+"/CashRegister/"+id+"/enable", config);
    console.log(res)
    return res.data;
}

const disableCashRegister = async(id)=>{
    //peticion con valor desde body
    const res = await axios.patch(baseUrlFinanzas+"/CashRegister/"+id+"/disable", config);
    console.log(res)
    return res.data;
}

export {movement, getCashRegister, addCashRegister, openCashRegister, closeCashRegister, getCashRegisterOpen, enableCashRegister, disableCashRegister};