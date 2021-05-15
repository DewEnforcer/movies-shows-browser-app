import React from 'react'
import { useHistory } from 'react-router';

export default function MovieDisplay({imgSrc, data}) {
    const history = useHistory();

    const handleMovieClicked = () => {
        history.push("/movie", {...data});
    }

    return (
        <div className="movie_display_box" style={{backgroundImage: `url("http://image.tmdb.org/t/p/w342/${imgSrc}")`}} onClick={handleMovieClicked}>
        </div>
    )
}
