import React, { useEffect, useState } from 'react'
import MovieDisplay from './MovieDisplay'

const MAX_LIST_RESULTS = 8;

export default function MovieList({title, data, titleWithoutResults = true}) {
    const [page, setPage] = useState(1);
    const [displayedResults, setDisplayedResults] = useState([]);
    const [onLastPage, setOnLastPage] = useState(false);

    const displayUI = title && (titleWithoutResults || data.length > 0);

    useEffect(() => {
        let start = (page - 1) * MAX_LIST_RESULTS;
        
        if (start + MAX_LIST_RESULTS > data.length) {
            start = data.length - MAX_LIST_RESULTS;
            setOnLastPage(true);
        } else setOnLastPage(false);

        const items = [...data].splice(start, MAX_LIST_RESULTS);
        setDisplayedResults(items);
    }, [page, data]);

    const handlePageChange = pageWay => {
        const newPage = page + pageWay;

        if (newPage < 1) return;
        if (pageWay === 1 && onLastPage) return; 
        
        if (onLastPage) setOnLastPage(false);

        setPage(newPage);
    }

    return (
        <div className="movie_list_box">
            {displayUI && <h2>{title}</h2>}
            <div className="movie_list_content">
                {displayedResults.map(m => <MovieDisplay key={m.id} data={m} imgSrc={m.poster_path}/>) /* add img src */}
            </div>
            {displayUI && (
                <>
                <button className="movie_list_btn movie_list_goback" disabled={page === 1} onClick={() => handlePageChange(-1)}>&#60;</button>
                <button className="movie_list_btn movie_list_goforward" disabled={onLastPage} onClick={() => handlePageChange(1)}>&#62;</button>
                </>
            )}
        </div>
    )
}
