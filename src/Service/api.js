import axios from 'axios';

const url='http://localhost:8000';

export const user_signup=async(user)=>{
    return await axios.post(`${url}/signup`,user);    
}

export const user_login=async(body)=>{
    return await axios.post(`${url}/login`,body);
}

export const getProducts=async()=>{
    return await axios.get(`${url}/getproducts`);
}