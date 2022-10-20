import React, {useState, useEffect} from "react";
import '../css/Home.css'
import {Navbar} from "../components";
import { ReserveForm } from '../container';
import { Footer, FindUs } from '../container';
import '../App.css';
//import {useNavigate} from 'react-router-dom';


const Contact = () => {

    return(
    <div className="App">
    <Navbar tipo={'cliente'}/>
    <FindUs />
    <Footer />
                
    
  </div>
  );

}

export default Contact;