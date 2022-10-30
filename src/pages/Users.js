import React, {useState, useEffect} from "react";
import '../css/Home.css'
import {Navbar, TableMesas} from "../components";
import PropagateLoader from 'react-spinners/PropagateLoader';
import { TableUsers } from "../container";
import { getUser } from "../services/User";
//import {useNavigate} from 'react-router-dom';

const override= {
    display:"block",
    borderColor:"red",
    marginTop:"20%",
    marginLeft:"50%"
  };

const TableUser = () => {

    const [allUsers, setAllUsers] = useState([{ id: 1, name: "Mesahfdkghkfjdgh1", email: 5 },]);
    var user = [];

    const [loading, setLoading] = useState(false);
    const UsersEnable = async() =>{
        user = await getUser();
        console.log(await getUser())
        
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
                <TableUsers users={allUsers} setUsers={setAllUsers}/>
            </>
        }
    
  </div>
  );

}

export default TableUser;