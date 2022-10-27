import React, { useState } from "react";
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BsX } from 'react-icons/bs';
import '../Dish/Dish.css';
import { addOrder } from "../../services/Cliente";


var total=0;

 const CardFood=({dishes})=> {
  const [reservaCreada, setReservaCreada] = useState(false);
  const [showPedir, setShowPedir] = useState(false);
  const [list, setList] = useState([]);
  

  const handleInputChange=(plato)=>{
    const dish ={Dish:plato.nombre,amount:1, price: plato.precio}
    list.push(dish)
    setShowPedir(true);
    total=total+plato.precio;
    console.log(list)
  }

  const ordenar=async()=>{
    const id ='7a138d77-3fe6-486f-bd4d-620002d3361b';
    const data ={
      clientId: '7a138d77-3fe6-486f-bd4d-620002d3361b',
      Orders:list
    }
    console.log(data)
    await addOrder(data, id);
    

  }


  return (
    <>
    {showPedir ? <button class="btn-flotante" onClick={()=>setReservaCreada(true)}>Pedir</button>:<></>}
    {dishes.map(element =>(
    <Card sx={{ maxWidth: 300, margin:10 }}>
      <CardMedia
        component="img"
        height="140"
        image={require('../../assets/images/charquican.jpg')} 
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {element.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {element.detalle}
        </Typography>
        <br/>
        <Typography variant="body2" color="text.secondary">
          ${element.precio}
        </Typography>
      </CardContent>
      <CardActions>
      
        <Button size="small" style={{color:'#F05742'}} onClick={()=>handleInputChange(element)}>Ordenar</Button>
      </CardActions>
    </Card>
    ))}
    
    <Modal isOpen={reservaCreada}>
          <ModalHeader>
            <div>
              <h3>Platos a ordenar</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              {list.map(elem =>(
                <div style={{flexDirection:'row', display:'flex'}}>
                <div>
                <h5>{elem.Dish}</h5>
                <p>precio: ${elem.price}</p>
                </div>
                <div>
                <BsX color="red" fontSize={30} style={{marginLeft:10}} onClick={()=>{setList(list.filter(item => item.Dish !== elem.Dish)); total = total-elem.price} } />
                </div>
                </div>
                
              ))}
              <p>Total: ${total}</p>
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
          <button
              className="btn btn-primary"
              onClick={()=>{ordenar()}}
            >
              Ordenar
            </button>
            <button
              className="btn btn-primary"
              onClick={()=>{setReservaCreada(false)}}
            >
              Serguir Ordenando
            </button>
          </ModalFooter>
        </Modal>
    </>
  );
}
export default CardFood;