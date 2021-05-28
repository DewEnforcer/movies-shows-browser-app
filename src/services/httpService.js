import axios from "axios";
import config from "../config/default";

axios.defaults.baseURL = config.API_BASE_URL;
axios.defaults.params = {};
axios.defaults.params["api_key"] = config.api_key;
axios.defaults.params["language"] = config.app_lang;

export const addApiKey = url => `${url}?api_key=${config.api_key}`;

const http = {
    get: axios.get,
    post: axios.post,
    patch: axios.patch,
    put: axios.put,
    delete: axios.delete
}

export default http;