import axios from "../axios"
import authHeader from "./auth-header";

const getAllOrdersDetail = () => {
    return axios.get('/v1/orders-detail/list', authHeader())
}

const getOrdersDetail = (id) => {
  return axios.get(`/v1/orders-detail/get/${id}`,authHeader)
}

const deleteOrdersDetail = (id) => {
  return axios.delete(`/v1/orders-detail/delete/${id}`,authHeader())
}

const updateOrdersDetail = (data) => {
  return axios.put('/v1/orders-detail/update', data, authHeader())
}

const createOrdersDetail = (data) => {
  return axios.post('/v1/orders-detail/create', data, authHeader())
}
export {getAllOrdersDetail, getOrdersDetail, deleteOrdersDetail, updateOrdersDetail, createOrdersDetail}