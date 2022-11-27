import React, {useState, useEffect} from "react";
import '../css/Home.css'
import {Navbar, TableMesas, TableOrderProvider, TableProvider} from "../components";
import PropagateLoader from 'react-spinners/PropagateLoader';
import { TableUsers } from "../container";
import { getUser } from "../services/User";
import { getOrderProvider, getProvider } from "../services/Tables";
import { get } from "react-scroll/modules/mixins/scroller";
import { getProduct } from "../services/Cliente";
//import {useNavigate} from 'react-router-dom';

const override= {
    display:"block",
    borderColor:"red",
    marginTop:"20%",
    marginLeft:"50%"
  };

const OrderProvider = () => {

    const [allUsers, setAllUsers] = useState([]);
    const [allProduct, setAllProduct] = useState([]);
    const [allProvider, setAllProvider] = useState([]);
    var user = [];
    var proveedor = [];
    var producto = [];

    const [loading, setLoading] = useState(false);
    const UsersEnable = async() =>{
        user = await getOrderProvider();
        proveedor= await getProvider();
        producto = await getProduct();
        console.log(await getOrderProvider())
        
    }
    useEffect(()=>{
        setLoading(true)
        UsersEnable()
        setTimeout(()=>{
            setAllUsers(user)
            setAllProduct(producto)
            setAllProvider(proveedor)
            setLoading(false)
        }, 5000);
    },[])

    return(
    <div className="App">
        {
            loading ? <PropagateLoader color={'red'} loading = {loading} cssOverride={override} size={40}/>
            :
            <>
                <Navbar tipo={'cocina'}/>
                <TableOrderProvider users={allUsers} setUsers={setAllUsers} producto={allProduct} proveedor={allProvider}/>
            </>
        }
    
  </div>
  );

}

export default OrderProvider;