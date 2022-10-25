import React, {useState, useEffect} from "react";
import '../css/Home.css'
import {Cardfood, Navbar} from "../components";
import PropagateLoader from 'react-spinners/PropagateLoader';

//import {useNavigate} from 'react-router-dom';

const override= {
    display:"block",
    borderColor:"red",
    marginTop:"20%",
    marginLeft:"50%"
  };

const Dish = () => {

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
                <Navbar tipo={'cliente'}/>
                <br/><br/><br/><br/>
                <Cardfood/>
            </>
        }
    
  </div>
  );

}

export default Dish;