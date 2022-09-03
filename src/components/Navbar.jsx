import React, {useState} from "react";
import {Link} from 'react-scroll';
import logo from '../assets/images/Logo.png'

const Navbar =({menu})=>{

    const [nav, setNav] = useState(false);

    const changeBackground =()=>{
        if(window.scroll >= 50){
            setNav(true);
        }
        else{
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return(
        <nav className={nav ? 'nav active':'nav'}>
            <Link to='main' className="logo">
                <img src = {logo} alt = '' />
            </Link>
            <input className="menu-btn" type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className="nav-icon"/>
            </label>
            <ul className='menu'>
                {menu.map(u=><li><Link to='#'>{u}</Link></li>)}
            </ul>

        </nav>

    );
}
export default Navbar;