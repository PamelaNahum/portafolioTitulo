import React from "react";
import imagen from '../../assets/images/porotos-granados-1.jpg'
import Button from 'react-bootstrap/Button';

const Header =()=>{
    const styleImg ={
        position: "absolute",
        width: "40%",
        right: "30px",
        top: "15%",
        borderRadius: "10px"
    }
    const styleText ={
        position: "absolute",
        width: "40%",
        left: "10%",
        top: "20%",
        fontFamily: 'Josefin Sans',
        fontWeight: "300",
        color: "#000000"
    }
    const styleButton ={
        position: "absolute",
        width: "30%",
        left: "10%",
        top: "40%",
        backgroundColor: '#F05742',
        borderColor:'#F05742'

    }

    return(
        <div>
            
            <div>
                <h1 style={styleText}>Comida casera, saludable.</h1>
                <Button style={styleButton}>Reservar</Button>
                
                <img src={imagen} style={styleImg} alt="porotos"></img>
            </div>
        </div>

    );
}

export default Header;