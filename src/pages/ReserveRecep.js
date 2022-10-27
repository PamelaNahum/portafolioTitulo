import React, {useState, useEffect} from "react";
import '../css/Home.css'
import {Navbar} from "../components";
import { ReserveForm } from '../container';
import { Footer } from '../container';
import '../App.css';
//import {useNavigate} from 'react-router-dom';


const ReserveRecep = () => {

    return(
    <div className="App">
    <Navbar tipo={'recepcion'}/>
    <ReserveForm type={'Recepcion'} />
    <Footer />
                
    
  </div>
  );

}

export default ReserveRecep;