import axios from "axios";

const token = 'asdfad78941555fASDFTGHYjusdfgTY4156123';


const ngrokEnd = 'https://8bff-45-224-206-156.ngrok-free.app';
const sufix    =  '/api';

const api = axios.create({
    baseURL: ngrokEnd+sufix,
    headers:{'Authorization': token}
});


export default api;