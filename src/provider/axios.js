import axios from "axios";


const ngrokEnd = 'https://b0ab-45-224-205-183.ngrok-free.app'
const sufix    =  '/api'

const api = axios.create({
    baseURL: ngrokEnd+sufix
});

export default api;