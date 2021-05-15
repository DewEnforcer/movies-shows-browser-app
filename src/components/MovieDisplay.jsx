import React from 'react'
import { useHistory } from 'react-router'

export default function MovieDisplay() {
    const {location, push} = useHistory();

    if (!location.state) {
        push("/");
        return null;
    }

    const {title, overview, poster_path, vote_average, vote_count, release_date, id} = location.state;

    const navigateToPlayer = () => {
        push(`/play/${id}`);
    }


    return (
        <div className="movie_detail_box">
            <div className="movie_detail_text">
                <h1>{title}</h1>
                <p>{overview}</p>
                <div className="movie_detail_metadata_box">
                    <span>Release date: {release_date}</span>
                    <span>Vote average: {vote_average}</span>
                    <span>Vote count: {vote_count}</span>
                </div>
                <button type="button" className="btn_watch_movie" onClick={navigateToPlayer}>Watch movie</button>
            </div>
            <div className="movie_detail_img" style={{backgroundImage: `url("http://image.tmdb.org/t/p/w342${poster_path}")`}}>
            </div>
        </div>
    )
}
