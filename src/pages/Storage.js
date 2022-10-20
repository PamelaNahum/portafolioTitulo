import React, {useState, useEffect} from "react";
import '../css/Home.css'
import {Navbar} from "../components";
import PropagateLoader from 'react-spinners/PropagateLoader';
//import {useNavigate} from 'react-router-dom';

const override= {
    display:"block",
    borderColor:"red",
    marginTop:"20%",
    marginLeft:"50%"
  };

const Storage = () => {

    const [loading, setLoading] = useState(false);

    
    
    useEffect(()=>{
        setLoading(true)
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
                <Navbar menu={['Solicitar Insumos', 'Insumos', 'Controlar Stock', 'Ingresar Receta']}/>
            </>
        }
    
  </div>
  );

}

export default Storage;