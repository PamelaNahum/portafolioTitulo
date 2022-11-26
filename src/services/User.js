import axios from 'axios';

import { baseUrl, config } from './Config';

const addUser = async(user)=>{
    //peticion con valor desde body
    const res = await axios.post(baseUrl+"/User/Register", user, config);
    console.log(res)
    return res.data;
}

const getUser = async()=>{
    //peticion con valor desde body
    const res = await axios.get(baseUrl+"/User",config);
    return res.data;
}

const userRol = async(id, roleId)=>{
    //peticion con valor desde body
    let data = {
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjAwMDAwMDAxLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBbnRvbmlvIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoicmlxdWVsbWVhbnRvbmlvOTBAZ21haWwuY29tIiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiJIQlFYRlVLT09TU0NDT0o3SEM0TEFQNlFMSlFBUFdGNSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjY5NTIyMjcxLCJpc3MiOiJsb2NhbGhvc3Q6ODA4MCIsImF1ZCI6ImxvY2FsaG9zdDo4MDgwIn0.V1hu4db-bqlIATi1VVlrsH_YqFxBSvjkS0wL0Z8q9sA'},
        params: { roleId: roleId },
      }
    const res = await axios.post(baseUrl+"/User/"+id+"/role",data);
    return res.data;
}

const getRoles = async()=>{
    //peticion con valor desde body
    const res = await axios.get("https://localhost:5051/roles",{}, config);
    console.log(res)
    return res.data;
}

const disableUser = async(userId, data)=>{
    const res = await axios.patch(baseUrl+"/User/"+userId+'/disable', config);
    console.log(res)
    return res.data;
}

const enableUser = async(userId, data)=>{
    const res = await axios.patch(baseUrl+"/User/"+userId+'/enable', config);
    console.log(res)
    return res.data;
}



export {addUser, getUser, userRol, getRoles, disableUser, enableUser};