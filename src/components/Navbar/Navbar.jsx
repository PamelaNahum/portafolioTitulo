import React, { useCallback, useState } from "react";
import logo from '../../assets/images/Logo.png'
import {useNavigate, Link} from 'react-router-dom';

const Navbar =({tipo})=>{

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
  const navigate = useNavigate();
  const handleOnclick = useCallback(()=>navigate('', {replace:true}, [navigate]));
  const url = "/"+tipo;

    return(
        <nav className={nav ? 'nav active':'nav'} style={{flex:2}}>
            {tipo == 'cliente' ? 
            <Link to='/' className="logo">
            <img src = {logo} alt = '' />
        </Link> 
        :
        <Link to={url} className="logo">
            <img src = {logo} alt = '' />
        </Link> 

            }
            
            <input className="menu-btn" type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className="nav-icon"/>
            </label>
            {tipo==='cliente' && 
                <ul className='menu'>
                <li><Link to="/" style={{ textDecoration: 'none' }}>Inicio</Link></li>
                <li><Link to="/Reservar" style={{ textDecoration: 'none' }}>Reservar</Link></li>
                <li><Link to="/Ordenar" style={{ textDecoration: 'none' }}>Ordenar</Link></li>
                <li><Link to="/Menu" style={{ textDecoration: 'none' }}>Carta</Link></li>
                <li><Link to="/Contacto" style={{ textDecoration: 'none' }}>Contacto</Link></li>
            </ul>
            }
            {tipo==='admin' && 
                <ul className='menu'>
                    <li><Link to="/admin" style={{ textDecoration: 'none' }}>Inicio</Link></li>
                <li><Link to="/Invetario" style={{ textDecoration: 'none' }}>Inventario</Link></li>
                <li><Link to="/Mesas" style={{ textDecoration: 'none' }}>Mesas</Link></li>
                <li><Link to="/Usuarios" style={{ textDecoration: 'none' }}>Usuarios</Link></li>
                <li><Link to="/Clientes" style={{ textDecoration: 'none' }}>Clientes</Link></li>
                <li><Link to="/Dispo" style={{ textDecoration: 'none' }}>Disponibilidad</Link></li>
                <li><Link to="/ReportesAdmin" style={{ textDecoration: 'none' }}>Reportes</Link></li>
            </ul>
            }
            {tipo==='finanzas' && 
                <ul className='menu'>
                <li><Link to="/finanzas" style={{ textDecoration: 'none' }}>Inicio</Link></li>
                <li><Link to="/CalGanacias" style={{ textDecoration: 'none' }}>Calcular Ganancias</Link></li>
                <li><Link to="/Reportes" style={{ textDecoration: 'none' }}>Reportes</Link></li>
                <li><Link to="/Boletas" style={{ textDecoration: 'none' }}>Emitir Boletas</Link></li>
                </ul>
            }
            {tipo==='cocina' && 
                <ul className='menu'>
                <li><Link to="/cocina" style={{ textDecoration: 'none' }}>Inicio</Link></li>
                <li><Link to="/Pedidos" style={{ textDecoration: 'none' }}>Pedidos</Link></li>
                <li><Link to="/Reservar" style={{ textDecoration: 'none' }}>Recetas</Link></li>
                </ul>
            }
            {tipo==='recepcion' && 
                <ul className='menu'>
                <li><Link to="/recepcion" style={{ textDecoration: 'none' }}>Inicio</Link></li>
                <li><Link to="/ReservarRecepcion" style={{ textDecoration: 'none' }}>Reservar</Link></li>
                <li><Link to="/AsignarReserva" style={{ textDecoration: 'none' }}>Asignar Mesa</Link></li>
                <li><Link to="/DispoRecpecion" style={{ textDecoration: 'none' }}>Ver Disponibilidad</Link></li>
                </ul>
            }
            

        </nav>

    );
}
export default Navbar;