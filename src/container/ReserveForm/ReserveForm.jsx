import React,{useState} from 'react';
import { Reserve,SubHeading, TableReserve } from '../../components';
import Plato2 from '../../assets/images/ceviche.jpg';
import './Chef.css';

const ReserveForm = () => {
  
  return(
  <div className="app__bg app__wrapper section__padding" >
    <div className="app__wrapper_info">
      <SubHeading title="" />
      <h1 className="headtext__cormorant" style={{ color: '#E76F51' }}>Reservar</h1>
      <Reserve/>
      <p className="p__opensans" style={{ color: '#FFFFFF' }}> Recomendamos llegar 5 minutos antes. </p>
      
    </div>
  </div>
)};

export default ReserveForm;
