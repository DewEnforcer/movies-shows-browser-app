import axios from "axios";
import config from "../config/default";

axios.defaults.baseURL = config.API_BASE_URL;

export const addApiKey = url => `${url}?api_key=${config.api_key}`;

export default {
    get: axios.get,
    post: axios.post,
    patch: axios.patch,
    put: axios.put,
    delete: axios.delete
}