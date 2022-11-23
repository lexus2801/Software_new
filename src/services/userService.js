import axios from "../axios"
import authHeader from './auth-header';
const handleLoginApi = (username,password) => {
    return axios.post('/v1/account/login',{username,password});
}

const getAllUsers = () => {
    return axios.get('/v1/account/list',authHeader())
}

export {handleLoginApi,getAllUsers}
