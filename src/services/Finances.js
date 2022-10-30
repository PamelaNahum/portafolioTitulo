import axios from 'axios';

import { baseUrlFinanzas, config} from './Config';

const movement = async(data,id)=>{
    //peticion con valor desde body
    const res = await axios.post(baseUrlFinanzas+"/CashRegister/"+id+"/movement", data, config);
    console.log(res)
    return res.data;
}




export {movement};