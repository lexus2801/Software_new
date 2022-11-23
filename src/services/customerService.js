import axios from "../axios"

export default function authHeader() {
    const token = localStorage.getItem('token');
    if (token) {
        return { 
          headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
    }
    else {return {}}
}

const getAllCustomers = () => {
    return axios.get('/v1/customer/list', authHeader())
}

const getCustomer = (customerId) => {
  return axios.get(`/v1/customer/get/${customerId}`,authHeader)
}

const deleteCustomer = (customerId) => {
  return axios.delete(`/v1/customer/delete/${customerId}`,authHeader())
}

const updateCustomerService = (data) => {
  return axios.put('/v1/customer/update', data, authHeader())
}

const createNewCustomerService = (data) => {
  return axios.post('/v1/customer/create', data, authHeader())
}
const RegisterService = (data) => {
  return axios.post('/v1/customer/register', data, authHeader())
}
const getProfile = () => {
  return axios.get('/v1/customer/profile', authHeader())
}

const updateProfile = (data) => {
  return axios.put('/v1/customer/update-profile', data, authHeader())
}
export {getAllCustomers, deleteCustomer, getCustomer, createNewCustomerService, updateCustomerService, getProfile, updateProfile,RegisterService}