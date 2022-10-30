import React, {useState, useEffect} from "react";
import '../css/Home.css'
import {Navbar} from "../components";
import { Footer, SearchForm } from '../container';
import '../App.css';
//import {useNavigate} from 'react-router-dom';


const AsigReserv = () => {

    return(
    <div className="App">
    <Navbar tipo={'recepcion'}/>
    <SearchForm />
    <Footer />
                
    
  </div>
  );

}

export default AsigReserv;