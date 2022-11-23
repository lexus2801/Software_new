import axios from "../axios";
import authHeader from "./auth-header";
// export default function authHeader(){
//     const token = localStorage.getItem('token');
//     if(token){
//         return {
//             Headers:{
//                 'Content-Type':'application/json',
//                 'Accept':'application/json',
//                 'Authorization':`Bearer ${token}`
//             }
//         }
//     }
//     else {return {}}
// }
const getAllProduct = () => {
    return axios.get('/v1/product/list', authHeader())

}

const getAllProductClient = () => {
  return axios.get('/v1/product/client-list?status=1', authHeader())

}

const editProductService = (data) => {
  return axios.put('/v1/product/update',data, authHeader())

}

const getProduct = (ProductId) => {
    return axios.get(`/v1/product/get/${ProductId}`,authHeader())
  }

const getProductClient = (ProductId) => {
  return axios.get(`/v1/product/client-get/${ProductId}`,authHeader())
}

const getProductByCategory = (id) => {
  return axios.get(`/v1/product/products-by-category/${id}`,authHeader())
}

const getClientProductByCategory = (id) => {
  return axios.get(`/v1/product/client-list?categoryId=${id}&status=1`,authHeader())
}

const deleteProduct = (ProductId) => {
    return axios.delete(`/v1/product/delete/${ProductId}`,authHeader())
  }
const createNewProductService = (data) => {
    return axios.post('/v1/product/create',data,authHeader())
  }

export {getClientProductByCategory, getProductClient, getAllProduct, deleteProduct, getProduct, getAllProductClient, createNewProductService, editProductService, getProductByCategory}