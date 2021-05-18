import React from 'react'
import MovieDisplay from './MovieDisplay'

export default function MovieList({title, data, titleWithoutResults = true}) {
    const displayTitle = title && (titleWithoutResults || data.length > 0);

    return (
        <div className="movie_list_box">
            {displayTitle && <h2>{title}</h2>}
            <div className="movie_list_content">
                {data.splice(0,8).map(m => <MovieDisplay key={m.id} data={m} imgSrc={m.poster_path}/>) /* add img src */}
            </div>
        </div>
    )
}
