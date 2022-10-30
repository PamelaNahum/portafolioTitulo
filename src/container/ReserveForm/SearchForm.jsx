import React from 'react';
import { SearchReserve, SubHeading } from '../../components';
import Plato2 from '../../assets/images/ceviche.jpg';
import './Chef.css';

const SearchForm = () => (
  <div className="app__bg app__wrapper section__padding" style={{flexDirection:'row'}}>
    <div className="app__wrapper_info">
      <SubHeading title="" />
      <h1 className="headtext__cormorant" style={{ color: '#E76F51' }}>Cliente</h1>
      <SearchReserve/>
    
      
    </div>
    <div className="app__wrapper_img">
      <img src={Plato2} alt="finus_img" />
    </div>
  </div>
);

export default SearchForm;
