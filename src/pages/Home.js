import React, {useState, useEffect} from "react";
import '../css/Home.css'
import {Navbar, Header} from "../components";
import PropagateLoader from 'react-spinners/PropagateLoader';
import { AboutUs, Chef, FindUs, Footer, Gallery, Intro, Laurels, SpecialMenu } from '../container';
import '../App.css';
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
        }, 20);
    },[])

    return(
    <div className="App">
        {
            loading ? <PropagateLoader color={'red'} loading = {loading} cssOverride={override} size={40}/>
            :
            <>
                <Navbar tipo={'cliente'}/>
    <SpecialMenu />
    <Chef />
    <Intro />
    <Gallery />
    <FindUs />
    <Footer />
                
            </>
        }
    
  </div>
  );

}

export default Home;