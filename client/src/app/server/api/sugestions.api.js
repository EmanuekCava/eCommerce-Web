import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:2100' })

export const sugestionsApi = async () => {
    return await api.get('/sugestions')
}
export const sugestionApi = async (id) => {
    return await api.get(`/sugestions/${id}`)
}