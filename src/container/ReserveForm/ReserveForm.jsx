import React from 'react';
import { SubHeading } from '../../components';
import Plato2 from '../../assets/images/ceviche.jpg';
import { Reserve } from '../../components';
import './Chef.css';

const ReserveForm = () => (
  <div className="app__bg app__wrapper section__padding" style={{flexDirection:'row'}}>
    <div className="app__wrapper_info">
      <SubHeading title="" />
      <h1 className="headtext__cormorant" style={{ color: '#E76F51' }}>Reservar</h1>
      <Reserve/>
      <p className="p__opensans" style={{ color: '#FFFFFF' }}> Recomendamos llegar 5 minutos antes. </p>
      
    </div>
    <div className="app__wrapper_img">
      <img src={Plato2} alt="finus_img" />
    </div>
  </div>
);

export default ReserveForm;
