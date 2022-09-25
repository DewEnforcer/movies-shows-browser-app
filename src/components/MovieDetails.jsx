import React from 'react'
import { useHistory } from 'react-router'

export default function MovieDetails() {
    const {location, push, goBack} = useHistory();

    if (!location.state) { //prevent users from entering this section with no movie/series select
        push("/");
        return null;
    }

    const {title, name, overview, poster_path, vote_average, vote_count, release_date, id} = location.state;

    const navigateToPlayer = () => {
        push(`/play/${id}`, {title});
    }

    const navigateBack = () => goBack();


    return (
        <div className="movie_detail_box">
            <button type="button" className="btn_exit_details" onClick={navigateBack}>  <i className="fa fa-arrow-left"></i> Go back</button>
            <div className="movie_detail_text">
                {title &&<h1>{title}</h1>}
                {name && <h1>{name}</h1>}
                <p>{overview}</p>
                <div className="movie_detail_metadata_box">
                    <span>Release date: {release_date}</span>
                    <span>Vote average: {vote_average}</span>
                    <span>Vote count: {vote_count}</span>
                </div>
                <button type="button" className="btn_watch_movie" onClick={navigateToPlayer}>Watch movie <i className='fa fa-play'></i> </button>
            </div>
            <div className="movie_detail_img" style={{backgroundImage: `url("http://image.tmdb.org/t/p/w342${poster_path}")`}}>
            </div>
        </div>
    )
}
