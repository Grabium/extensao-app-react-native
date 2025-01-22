import axios from "axios";


const ngrokEnd = 'https://ea1b-45-224-205-251.ngrok-free.app/api'


const api = axios.create({
    baseURL: ngrokEnd
});

export default api;