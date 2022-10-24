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

    const [allTables, setAllTables] = useState([{ id: 1, name: "Mesahfdkghkfjdgh1", capcity: 5 },]);
    var tables = [];

    const [loading, setLoading] = useState(false);
    const tablesEnable = async() =>{
        tables = await getTable();
        console.log(await getTable())
        
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
                <Navbar tipo={'admin'}/>
                <TableMesas mesas={allTables} setMesas={setAllTables}/>
            </>
        }
    
  </div>
  );

}

export default TableList;