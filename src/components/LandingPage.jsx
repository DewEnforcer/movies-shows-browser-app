import React, { Component } from 'react'
import MovieList from './movies/MovieList';

import config from "../config/default"
import { getMovieByGenreId, getPopularMovies } from '../services/movieService';
import { getPopularSeries } from '../services/seriesService';

export default class LandingPage extends Component {
    state = {
        popularMovies: [],
        popularSeries: [],
        family: [],
        documentary: []
    }

    async componentDidMount() {
        const {data: dataPopMovies} = await getPopularMovies();
        const {data: dataPopSeries} = await getPopularSeries();
        const {data: dataFamilyMov} = await getMovieByGenreId(10751);
        const {data: dataDocumentaryMov} = await getMovieByGenreId(99);


        const newState = {...this.state, 
            popularMovies: dataPopMovies.results.splice(0,8), 
            popularSeries: dataPopSeries.results.splice(0,8),
            family: dataFamilyMov.results.splice(0,8),
            documentary: dataDocumentaryMov.results.splice(0,8)
        };
        this.setState(newState);
    }

    render() {
        const {popularMovies, popularSeries, family, documentary} = this.state;

        return (
            <div className="landing_page_box">
                <h1>{config.app_name}</h1>
                <MovieList title="Popular movies" data={popularMovies}/>
                <MovieList title="Popular series" data={popularSeries}/>
                <MovieList title="Family" data={family}/>
                <MovieList title="Documentary" data={documentary}/>
            </div>
        )
    }
}
