import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import Logo from '../../assets/images/Logo.png'
import './Footer.css';

const Footer = () => {
  return(
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext" style={{ color: '#E76F51' }}>Dirección</h1>
        <p className="p__opensans" style={{ color: 'white' }}>Avenida Irarrázaval, 2899, Ñuñoa</p>
        <p className="p__opensans" style={{ color: 'white' }}>+56 9 8125 58 74</p>
        <p className="p__opensans" style={{ color: 'white' }}>+56 9 8235 45 27</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={Logo} alt="footer_logo" />
        <p className="p__opensans" style={{ color: 'white' }}>&quot;Nos encargaremos de hacer este momento especial.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook color='white'/>
          <FiTwitter color='white'/>
          <FiInstagram color='white'/>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext" style={{ color: '#E76F51' }}>Horarios</h1>
        <p className="p__opensans" style={{ color: 'white' }}>Lunes - Viernes:</p>
        <p className="p__opensans" style={{ color: 'white' }}>09:00 - 21:00</p>
        <p className="p__opensans" style={{ color: 'white' }}>Sabado - Domingo:</p>
        <p className="p__opensans" style={{ color: 'white' }}>09:00 - 23:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans" style={{ color: 'white' }}>2022 Diseñado con fínes estudiantiles.</p>
    </div>

  </div>
)};

export default Footer;
