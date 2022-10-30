import axios from 'axios';

const baseUrl = "http//localhost:5051/api"

const config ={
    headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjAwMDAwMDAxLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBbnRvbmlvIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoicmlxdWVsbWVhbnRvbmlvOTBAZ21haWwuY29tIiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiJRMk1OV0FGNFRUNUE1VEVQTktNQTZYSFNJNE1HNjNUMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjY3MTAyMzI1LCJpc3MiOiJsb2NhbGhvc3Q6ODA4MCIsImF1ZCI6ImxvY2FsaG9zdDo4MDgwIn0.9CjEfy0yfQ7BQrEmizikNYRQ7sT9lBZvdT-aQz54GRc'}
}


const loginUser = async(user)=>{
    //peticion con valor desde body
    const res = await axios.post(baseUrl+"/User/Login", user, config);
    console.log(res)
    return res.data;
}


export {loginUser};