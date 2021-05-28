import { Form, Formik, Field } from 'formik';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

import { queryMovies } from '../services/movieService';
import MovieList from './movies/MovieList';

import errTexts from "../texts/errorTexts";
import Loader from './Loader';

export default function SearchPage() {
    const [queryResults, setQueryResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmitQuery = async (data, {resetForm, setSubmitting}) => {
        if (data.query.trim().length === 0) return toast.error(errTexts.SEARCH_QUERY_EMPTY);

        setSubmitting(true);
        setIsLoading(true);

        const {data: resData, status} = await queryMovies(data.query);
        
        setSubmitting(false);
        setIsLoading(false);

        if (status !== 200) { // without the return, the form would get reset although the user got no results resulting in poor user experience
            console.error("Failed to fetch query results", status, data);
            toast.error(errTexts.SEARCH_RESULT_FETCH_ERROR);
            return;
        }
        
        setQueryResults(resData.results);
        resetForm()
    }

    return (
        <div className="search_box">
            <h1>Search</h1>
            <Formik initialValues={{query: ""}} onSubmit={handleSubmitQuery}>
                {({isSubmitting}) => (
                    <div className="search_bar_wrapper">
                        <Form>
                            <Field name="query" className="search_bar_input" type="input" placeholder="Enter name of a Movie/TV show you are looking for..."/>
                            <button disabled={isSubmitting} type="submit">Submit</button>
                        </Form>
                    </div>
                )}
            </Formik>
            {isLoading && <Loader/>}
            <MovieList titleWithoutResults={false} title="Search results" data={queryResults}/>
        </div>
    )
}
