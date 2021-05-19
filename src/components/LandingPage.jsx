import React, { Component } from 'react'
import MovieList from './movies/MovieList';
import { toast } from 'react-toastify';

import { getMovieByGenreId, getPopularMovies } from '../services/movieService';
import { getPopularSeries } from '../services/seriesService';

import config from "../config/default"
import errTexts from "../texts/errorTexts";

const FAMILY_MOVIE_GENRE_ID = 10751;
const DOCUMENTARY_MOVIE_GENRE_ID = 99;

export default class LandingPage extends Component { //wireframe 1
    state = {
        popularMovies: [],
        popularSeries: [],
        family: [],
        documentary: []
    }

    fetchData() {
        const popMovies = getPopularMovies();
        const popSeries = getPopularSeries();
        const familyMov = getMovieByGenreId(FAMILY_MOVIE_GENRE_ID);
        const documentaryMov = getMovieByGenreId(DOCUMENTARY_MOVIE_GENRE_ID);
        //call all functions at first, wait for them to be all resolved, then set the state with the retrieved values
        Promise.all([popMovies, popSeries, familyMov, documentaryMov]).then(values => { 
            const newState = {...this.state, 
                popularMovies: values[0].data.results,
                popularSeries: values[1].data.results,
                family: values[2].data.results,
                documentary: values[3].data.results
            };
            this.setState(newState);
        }).catch(err => {
            console.error(err);
            toast.error(errTexts.LANDING_PAGE_FETCH_ERR);
        })
    }

    componentDidMount() {
        this.fetchData();
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
