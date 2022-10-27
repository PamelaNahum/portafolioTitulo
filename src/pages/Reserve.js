import React, {useState, useEffect} from "react";
import '../css/Home.css'
import {Navbar} from "../components";
import { ReserveForm } from '../container';
import { Footer } from '../container';
import '../App.css';
//import {useNavigate} from 'react-router-dom';


const Reserve = () => {

    return(
    <div className="App">
    <Navbar tipo={'cliente'}/>
    <ReserveForm type={''} />
    <Footer />
                
    
  </div>
  );

}

export default Reserve;