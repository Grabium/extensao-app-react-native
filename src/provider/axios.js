import axios from "axios";


const ngrokEnd = 'https://ef0b-45-224-205-252.ngrok-free.app'
const sufix    =  '/api'

const api = axios.create({
    baseURL: ngrokEnd+sufix
});

export default api;