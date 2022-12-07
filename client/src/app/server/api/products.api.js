import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:2100' })

export const productsCategoryApi = async (category) => {
    return await api.get(`/productscategory/${category}`)
}

export const productsIndexApi = async () => {
    return await api.get('/productsindex')
}

export const productsFootwearApi = async () => {
    return await api.get('/footwearindex')
}

export const productApi = async (id) => {
    return await api.get(`/products/${id}`)
}

export const productsGenderApi = async (gender) => {
    return await api.get(`/productsgender/${gender}`)
}