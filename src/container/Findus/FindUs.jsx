import React from 'react';

import { SubHeading } from '../../components';
import Plato2 from '../../assets/images/ceviche.jpg';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact" style={{flexDirection:'row'}}>
    <div className="app__wrapper_info">
      <SubHeading title="Contacto" />
      <h1 className="headtext__cormorant" style={{ color: '#E76F51', marginBottom: '3rem' }}>Contáctanos</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans" style={{ color: '#FFFFFF' }}>Avenida Irarrázaval, 2899, Ñuñoa</p>
        <p className="p__cormorant" style={{ color: '#E76F51', margin: '2rem 0' }}>Horario:</p>
        <p className="p__opensans" style={{ color: 'white' }}>Lunes - Viernes:</p>
        <p className="p__opensans" style={{ color: 'white' }}>09:00 - 21:00</p>
        <p className="p__opensans" style={{ color: 'white' }}>Sabado - Domingo:</p>
        <p className="p__opensans" style={{ color: 'white' }}>09:00 - 23:00</p>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={Plato2} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
