import http from "./httpService";
import config from "../config/default";

const endPoint = "/tv"

export const getPopularSeries = (page = 1) => {
    const url = `${endPoint}/popular?api_key=${config.api_key}&language=en-US&page=${page}`;
    return http.get(url);
}
export const querySeries = query => {
    const url = `/search${endPoint}?api_key=${config.api_key}&language=en-US&query=${query}&page=1&include_adult=false`
    return http.get(url);
}