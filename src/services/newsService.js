import axios from "../axios"
import authHeader from './auth-header.js';

const getAllNews = () => {
    return axios.get('/v1/news/list',authHeader())
}

const createNews = (data) => {
    return axios.post('/v1/news/create',data,authHeader())
}

const updateNews = (data) => {
    return axios.put('/v1/news/update',data,authHeader())
}

const deleteNews = (id) => {
    return axios.delete(`/v1/news/delete/${id}`,authHeader())
}

const getOneNews = (id) => {
    return axios.get(`/v1/news/get/${id}`,authHeader())
}

export {getAllNews,createNews,updateNews,deleteNews,getOneNews}