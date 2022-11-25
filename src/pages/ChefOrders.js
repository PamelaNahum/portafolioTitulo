import React, {useState, useEffect} from "react";
import '../css/Home.css'
import {Navbar, TableMesas, TableOrders} from "../components";
import PropagateLoader from 'react-spinners/PropagateLoader';
import { getTable } from "../services/Tables";
import { getAllOrders } from "../services/Cliente";
//import {useNavigate} from 'react-router-dom';

const override= {
    display:"block",
    borderColor:"red",
    marginTop:"20%",
    marginLeft:"50%"
  };

const ChefOrders = () => {

    const [allTables, setAllTables] = useState([]);
    var tables = [];

    const [loading, setLoading] = useState(false);
    const tablesEnable = async() =>{
        tables = await getAllOrders();
        //console.log(tables.length !== 0)
        
    }
    useEffect(()=>{
        setLoading(true)
        tablesEnable()
        setTimeout(()=>{
            setAllTables(tables)
            
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
                <TableOrders mesas={allTables} setMesas={setAllTables}/>
            </>
        }
    
  </div>
  );

}

export default ChefOrders;