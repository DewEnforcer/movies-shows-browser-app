import http from "./httpService";
import config from "../config/default";

const endPoint = "/movie"

export const getPopularMovies = (page = 1) => {
    const url = `${endPoint}/popular?api_key=${config.api_key}&language=en-US&page=${page}`;
    return http.get(url);
}

export const getMovieByGenreId = genreId => http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${config.api_key}&with_genres=${genreId}`)