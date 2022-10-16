import React from 'react';
import imagen from '../../assets/images/chef.jpg';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={imagen} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Conócenos" />
      <h1 className="headtext__cormorant" style={{ color: '#E76F51' }}>¿Quíenes somos?</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans" style={{ color: '#FFFFFF' }}>Somos un retaurant familiar enfocados en dar el mejor servicio.</p>
        </div>
        <p className="p__opensans" style={{ color: '#FFFFFF' }}> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>

      <div className="app__chef-sign">
        <p style={{ color: '#E76F51' }}>Juan Castillo</p>
        <p className="p__opensans" style={{ color: '#FFFFFF' }}>Chef y Dueño</p>
      </div>
    </div>
  </div>
);

export default Chef;
