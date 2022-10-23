import React, {useState, useEffect} from "react";
import '../css/Home.css'
import {Navbar, TableMesas} from "../components";
import PropagateLoader from 'react-spinners/PropagateLoader';
import { getTable } from "../services/Tables";
//import {useNavigate} from 'react-router-dom';

const override= {
    display:"block",
    borderColor:"red",
    marginTop:"20%",
    marginLeft:"50%"
  };

const TableList = () => {

    const [allTables, setAllTables] = useState();

    const [loading, setLoading] = useState(false);
    const tablesEnable = async() =>{
        console.log('hola')
        setAllTables(await getTable())
        
    }
    useEffect(()=>{
        setLoading(true)
        tablesEnable()
        setTimeout(()=>{
            setLoading(false)
        }, 5000);
    },[])

    return(
    <div className="App">
        {
            loading ? <PropagateLoader color={'red'} loading = {loading} cssOverride={override} size={40}/>
            :
            <>
                <Navbar tipo={'admin'}/>
                <TableMesas mesas={allTables}/>
            </>
        }
    
  </div>
  );

}

export default TableList;