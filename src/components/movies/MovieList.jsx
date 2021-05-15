import React from 'react'
import MovieDisplay from './MovieDisplay'

export default function MovieList({title, data}) {
    return (
        <div className="movie_list_box">
            {title && <h2>{title}</h2>}
            <div className="movie_list_content">
                {data.map(m => <MovieDisplay key={m.id} data={m} imgSrc={m.poster_path}/>) /* add img src */}
            </div>
        </div>
    )
}
