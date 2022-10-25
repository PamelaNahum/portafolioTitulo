import React from 'react';
import { OrderForm, SubHeading } from '../../components';
import Plato2 from '../../assets/images/ceviche.jpg';
import './Chef.css';

const FormOrder = () => (
  <div className="app__bg app__wrapper section__padding" style={{flexDirection:'row'}}>
    <div className="app__wrapper_info">
      <SubHeading title="" />
      <h1 className="headtext__cormorant" style={{ color: '#E76F51' }}>Ordenar</h1>
      <OrderForm/>
    
      
    </div>
    <div className="app__wrapper_img">
      <img src={Plato2} alt="finus_img" />
    </div>
  </div>
);

export default FormOrder;
