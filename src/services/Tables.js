import axios from 'axios';

import { baseUrl, config } from './Config';

const addTable = async(table)=>{
    //peticion con valor desde body
    const res = await axios.post(baseUrl+"/Table", table, config);
    console.log(res)
    return res.data;
}

const getTable = async()=>{
    //peticion con valor desde body
    const res = await axios.get(baseUrl+"/Table", {},config);
    return res.data;
}

const editTable = async(table)=>{
    //peticion con valor desde body
    const res = await axios.post(baseUrl+"/Table"+table.id, table, config);
    console.log(res)
    return res.data;
}

const enableTable = async(table)=>{
    //peticion con valor desde body
    const res = await axios.post(baseUrl+"/Table"+table.tableId+'table/Avaible', table, config);
    console.log(res)
    return res.data;
}



export {getTable, addTable, editTable, enableTable};