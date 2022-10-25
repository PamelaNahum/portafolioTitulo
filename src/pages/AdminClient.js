import React, {useState, useEffect} from "react";
import '../css/Home.css'
import {Navbar, TableClient} from "../components";
import PropagateLoader from 'react-spinners/PropagateLoader';
import { getClient } from "../services/Cliente";
//import {useNavigate} from 'react-router-dom';

const override= {
    display:"block",
    borderColor:"red",
    marginTop:"20%",
    marginLeft:"50%"
  };

const AdminClient = () => {

    const [allTables, setAllTables] = useState([{ id: 1, name: "Mesahfdkghkfjdgh1", capcity: 5 },]);
    var tables = [];

    const [loading, setLoading] = useState(false);
    const tablesEnable = async() =>{
        tables = await getClient();
        console.log(await getClient())
        
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
                <TableClient client={allTables} setClient={setAllTables}/>
            </>
        }
    
  </div>
  );

}

export default AdminClient;