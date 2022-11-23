import axios from "../axios"
import authHeader from './auth-header.js';

const getAllProvinces = () => {
    return axios.get('/v1/province/list', authHeader())
}

const getProvince = (provinceId) => {
  return axios.get('/v1/province/get/{provinceId}',authHeader)
}

const deleteProvince = (provinceId) => {
  return axios.delete(`/v1/province/delete/${provinceId}`,authHeader())
}

const updateProvinceService = (data) => {
  return axios.put('/v1/province/update', data, authHeader())
}

const createNewProvinceService = (data) => {
    return axios.post('/v1/province/create', data, authHeader())
}
export {getAllProvinces, deleteProvince, getProvince, createNewProvinceService, updateProvinceService}