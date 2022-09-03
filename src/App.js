import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
import Kitchen from "./pages/Kitchen";
import Admin from "./pages/Admin";
import Finance from "./pages/Finance";
import Reception from "./pages/Reception";
import Warehouse from "./pages/Warehouse";

const App =()=>{
    return(
        <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/cocina' element={<Kitchen/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/finanzas' element={<Finance/>}></Route>
      <Route path='/Recepcion' element={<Reception/>}></Route>
      <Route path='/Bodega' element={<Warehouse/>}></Route>
    </Routes>
    </BrowserRouter>
    );
}

export default App;