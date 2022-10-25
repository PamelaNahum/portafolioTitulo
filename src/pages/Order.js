import React, {useState, useEffect} from "react";
import '../css/Home.css'
import {Navbar, OrderForm} from "../components";
import { FormOrder } from '../container';
import { Footer } from '../container';
import '../App.css';
//import {useNavigate} from 'react-router-dom';


const Order = () => {

    return(
    <div className="App">
    <Navbar tipo={'cliente'}/>
    <FormOrder />
    <Footer />
                
    
  </div>
  );

}

export default Order;