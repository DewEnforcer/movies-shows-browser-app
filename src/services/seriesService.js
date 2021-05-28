import http from "./httpService";

const endPoint = "/tv"

export const getPopularSeries = (page = 1) => {
    const url = `${endPoint}/popular?page=${encodeURIComponent(page)}`;
    return http.get(url);
}
export const querySeries = query => {
    const url = `/search${endPoint}?query=${encodeURIComponent(query)}&page=1&include_adult=false`
    return http.get(url);
}