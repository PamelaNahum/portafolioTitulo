import React, {useState, useEffect} from "react";
import '../css/Home.css'
import {Navbar, TableMesas, TableProvider} from "../components";
import PropagateLoader from 'react-spinners/PropagateLoader';
import { TableUsers } from "../container";
import { getUser } from "../services/User";
import { getProvider } from "../services/Tables";
//import {useNavigate} from 'react-router-dom';

const override= {
    display:"block",
    borderColor:"red",
    marginTop:"20%",
    marginLeft:"50%"
  };

const Provider = () => {

    const [allUsers, setAllUsers] = useState([]);
    var user = [];

    const [loading, setLoading] = useState(false);
    const UsersEnable = async() =>{
        user = await getProvider();
        console.log(await getProvider())
        
    }
    useEffect(()=>{
        setLoading(true)
        UsersEnable()
        setTimeout(()=>{
            setAllUsers(user)
            
            setLoading(false)
        }, 5000);
    },[])

    return(
    <div className="App">
        {
            loading ? <PropagateLoader color={'red'} loading = {loading} cssOverride={override} size={40}/>
            :
            <>
                <Navbar tipo={'admin'}/>
                <TableProvider users={allUsers} setUsers={setAllUsers}/>
            </>
        }
    
  </div>
  );

}

export default Provider;