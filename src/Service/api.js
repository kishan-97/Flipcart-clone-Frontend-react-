import axios from 'axios';

const url='http://localhost:8000';

export const user_signup=async(user)=>{
    return await axios.post(`${url}/signup`,user);    
}