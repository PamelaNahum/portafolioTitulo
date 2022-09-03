import React, {useState, useEffect} from "react";
import '../css/Home.css'
import Navbar from "../components/Navbar";
import PropagateLoader from 'react-spinners/PropagateLoader';
import Header from "../components/Header";
//import {useNavigate} from 'react-router-dom';

const override= {
    display:"block",
    borderColor:"red",
    marginTop:"20%",
    marginLeft:"50%"
  };

const Home = () => {

    const [loading, setLoading] = useState(false);

    
    
    useEffect(()=>{
        setLoading(true)
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
                <Navbar menu={['Inicio', 'Reservar', 'Ordenar', 'Carta', 'Preguntas Frecuentes', 'Contacto']}/>
                <Header/>
            </>
        }
    
  </div>
  );

}

export default Home;