import React, {useState, useEffect} from "react";
import '../css/Home.css'
import {Navbar} from "../components";
import { Footer } from '../container';
import '../App.css';
//import {useNavigate} from 'react-router-dom';


const ReportAdmin = () => {

    return(
    <div className="App">
    <Navbar tipo={'admin'} />
    <br/><br/><br/><br/>
    <iframe title="REPORT_XXI - Página 1" width="800" height="636" src="https://app.powerbi.com/view?r=eyJrIjoiZjA5OWU3YmMtZWNjYS00YTA3LTk5N2UtOTI1OWQxYjM0ZTJmIiwidCI6IjcyZmQwYjVhLThhNmEtNGNmZi04OWY2LWJkZTk2MWY3ZTI1MCIsImMiOjR9" frameborder="0" allowFullScreen="true"></iframe>
    <Footer />
                
    
  </div>
  );

}

export default ReportAdmin;