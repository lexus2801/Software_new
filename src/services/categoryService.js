import axios from "../axios"
import authHeader from './auth-header.js';

const getAllCategories = () => {
    return axios.get('/v1/category/list',authHeader())
}

const getAllCategoriesClient = () => {
    return axios.get('/v1/category/auto-complete',authHeader())
}

const createNewCategory = (data) => {
    return axios.post('/v1/category/create',data,authHeader())
}

const updateCategory = (data) => {
    return axios.put('/v1/category/update',data,authHeader())
}

const deleteCategory = (id) => {
    return axios.delete(`/v1/category/delete/${id}`,authHeader())
}

export {getAllCategoriesClient,getAllCategories,createNewCategory,updateCategory,deleteCategory}