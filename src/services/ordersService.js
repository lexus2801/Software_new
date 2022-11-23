import axios from "../axios";
import authHeader from "./auth-header";
const getAllOrders = () => {
    return axios.get('/v1/orders/list', authHeader())

}
const getAllOrdersDetail = (OrdersId) => {
  return axios.get(`/v1/orders/detail-by-orders/${OrdersId}`, authHeader())

}
const editOrdersService = (data) => {
  return axios.put('/v1/orders/update',data, authHeader())
}
const editStateOrdersService = (data) => {
  return axios.put('/v1/orders/update-state',data, authHeader())

}

const getOrders = (OrdersId) => {
  return axios.get(`/v1/orders/get/${OrdersId}`,authHeader())
}


const createNewOrdersService = (data) => {
  return axios.post('/v1/orders/create',data,authHeader())
}

const createNewOrdersClient = (data) => {
  return axios.post('/v1/orders/client-create',data,authHeader())
}

const clientCancelOrders = (ordersId) => {
  return axios.put('/v1/orders/client-cancel-orders',ordersId,authHeader())
}

const getOrderDetailByOrderId = (OrdersId) => {
  return axios.get(`/v1/orders/client-get/${OrdersId}`,authHeader())
}

const getOrdersByCustomerId = () => {
  return axios.get('/v1/orders/client-list',authHeader())
}

export {editStateOrdersService,getOrderDetailByOrderId,getOrdersByCustomerId,createNewOrdersClient,getAllOrders,clientCancelOrders, getOrders, createNewOrdersService,editOrdersService,getAllOrdersDetail}

