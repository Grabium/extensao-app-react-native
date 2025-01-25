import axios from "axios";


const ngrokEnd = 'https://9c64-45-224-206-183.ngrok-free.app'
const sufix    =  '/api'

const api = axios.create({
    baseURL: ngrokEnd+sufix
});

export default api;