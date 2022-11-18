import React, {useState, useEffect} from "react";
import '../css/Home.css'
import {Cardfood, Navbar} from "../components";
import PropagateLoader from 'react-spinners/PropagateLoader';
import { getDish, getOrderByRut } from "../services/Cliente";
import { useLocation } from "react-router-dom";



//import {useNavigate} from 'react-router-dom';

const override= {
    display:"block",
    borderColor:"red",
    marginTop:"20%",
    marginLeft:"50%"
  };

const Dish = ({props}) => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [dishes, setDishes] =useState([]);
    const [order, setOrder] =useState([]);
    const rut = location.state.rut;

    const getData = async()=>{
        setDishes(await getDish());
    }
    const getOrder = async()=>{
        setOrder(await getOrderByRut(location.state.rut));
    }
    
    useEffect(()=>{
        console.log(location.state.rut)
        setLoading(true)
        getData();
        getOrder();
        console.log(order)
        setTimeout(()=>{
            setLoading(false)
        }, 2000);
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
                {dishes[1]!=undefined ? <Cardfood dishes={dishes} rut={rut} preOrder={order} /> : <></>}
                    
                
                </div>
            </>
        }
    
  </div>
  );

}

export default Dish;