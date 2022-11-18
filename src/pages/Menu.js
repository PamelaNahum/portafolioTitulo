import React, {useState, useEffect} from "react";
import '../css/Home.css'
import {Menu, Navbar} from "../components";
import PropagateLoader from 'react-spinners/PropagateLoader';
import { getDish } from "../services/Cliente";

//import {useNavigate} from 'react-router-dom';

const override= {
    display:"block",
    borderColor:"red",
    marginTop:"20%",
    marginLeft:"50%"
  };

const MenuList = () => {

    const [loading, setLoading] = useState(false);
    const [dishes, setDishes] =useState([]);

    const getData = async()=>{
        setDishes(await getDish());
    }
    
    useEffect(()=>{
        setLoading(true)
        getData();
        setTimeout(()=>{
            setLoading(false)
        }, 200);
    },[])

    return(
    <div className="App">
        {
            loading ? <PropagateLoader color={'red'} loading = {loading} cssOverride={override} size={40}/>
            :
            <>
                <Navbar tipo={'cliente'} />
                <br/><br/><br/><br/>
                <div style={{display:'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
                
                    <Menu dishes={dishes} />
                
                </div>
            </>
        }
    
  </div>
  );

}

export default MenuList;