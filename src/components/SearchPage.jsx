import { Form, Formik, Field } from 'formik';
import React, { useState } from 'react'
import { queryMovies } from '../services/movieService';
import MovieList from './movies/MovieList';

export default function SearchPage() { //wireframe 4
    const [queryResults, setQueryResults] = useState([]);

    const handleSubmitQuery = async (data, {resetForm, setSubmitting}) => {
        setSubmitting(true);
        const {data: resData, status} = await queryMovies(data.query);
        console.log(resData);
        setSubmitting(false);
        if (status !== 200) return console.log("Error");
        setQueryResults(resData.results.splice(0,8));
        resetForm()
    }

    return (
        <div className="search_box">
            <h1>Search</h1>
            <Formik initialValues={{query: ""}} onSubmit={handleSubmitQuery}>
                {({values, isSubmitting}) => (
                    <div className="search_bar_wrapper">
                        <Form>
                            <Field name="query" className="search_bar_input" type="input" placeholder="Enter name of a Movie/TV show you are looking for..."/>
                            <button disabled={isSubmitting} type="submit">Submit</button>
                        </Form>
                    </div>
                )}
            </Formik>
            <MovieList titleWithoutResults={false} title="Search results" data={queryResults}/>
        </div>
    )
}
