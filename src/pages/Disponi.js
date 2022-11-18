import React, {useState, useEffect} from "react";
import '../css/Home.css'
import {Navbar, TableEnables} from "../components";
import PropagateLoader from 'react-spinners/PropagateLoader';
import { getTable, getTableReserve } from "../services/Tables";
//import {useNavigate} from 'react-router-dom';

const override= {
    display:"block",
    borderColor:"red",
    marginTop:"20%",
    marginLeft:"50%"
  };

  var date = {};
var time = {};

const Disponi = () => {

    const [allTables, setAllTables] = useState([{ id: 1, name: "Mesahfdkghkfjdgh1", capcity: 5 },]);
    var tables = [];

    const [loading, setLoading] = useState(false);
    const tablesEnable = async() =>{
        tables = await getTableReserve(date, time);
        console.log(await getTableReserve(date, time))
        
    }
    useEffect(()=>{
        const fecha = new Date();
        date = {
            day: fecha.getDate(),
            month: fecha.getMonth()+1,
            year: fecha.getFullYear(),
          };
          time = { hrs: fecha.getHours(), min: fecha.getMinutes() };

          console.log(date, time)
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
                <TableEnables mesas={allTables} setMesas={setAllTables}/>
            </>
        }
    
  </div>
  );

}

export default Disponi;