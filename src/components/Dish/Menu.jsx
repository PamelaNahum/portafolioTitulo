import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../Dish/Dish.css";

const Menu = ({ dishes }) => {
  return (
    <>
    <>
    <p
            className="p__cormorant"
            style={{ color: "#E76F51", margin: "2rem 0" }}
          >
            Platos de fondo
          </p>
          </>
      {dishes.map((element) => (
        <div style={{display:'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
        
          {element.categoria === "Fondo" ? (
            
            <Card sx={{ maxWidth: 300, margin: 10 }}>
              <CardMedia
                component="img"
                height="140"
                image={require("../../assets/images/menu/" +
                  element.id +
                  ".jpg")}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {element.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {element.detalle}
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                  ${element.precio}
                </Typography>
              </CardContent>
            </Card>
            
          ) : (
            <></>
          )}
        </div>
      ))}
    </>
  );
};
export default Menu;
