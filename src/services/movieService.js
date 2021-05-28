import http from "./httpService";

const endPoint = "/movie"

export const getPopularMovies = (page = 1) => {
    const url = `${endPoint}/popular?page=${encodeURIComponent(page)}`;
    return http.get(url);
}

export const getMovieByGenreId = genreId => http.get(`/discover${endPoint}?with_genres=${encodeURIComponent(genreId)}`)

export const queryMovies = query => {
    const url = `/search${endPoint}?query=${encodeURIComponent(query)}&page=1&include_adult=false`
    return http.get(url);
}