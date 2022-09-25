import React, { useEffect, useState } from 'react'
import MovieDisplay from './MovieDisplay'

const MAX_LIST_RESULTS = 8;

const START_PAGE = 1;

export default function MovieList({title, data, titleWithoutResults = true}) {
    const [page, setPage] = useState(START_PAGE);
    const [displayedResults, setDisplayedResults] = useState([]);
    const [onLastPage, setOnLastPage] = useState(false);

    const displayUI = title && (titleWithoutResults || data.length > 0);

    useEffect(() => { //updates on page change | data change, decides which items from the data array will be displayed in the list
        let start = (page - 1) * MAX_LIST_RESULTS; //calculate the splice start
        
        if (start + MAX_LIST_RESULTS > data.length) { //check whether the splicing wouldnt overflow the max results, if so, change the start value to display the last 8 (on default) results available.
            start = data.length - MAX_LIST_RESULTS;
            setOnLastPage(true); //it is obvious we are on the "last page" of the results if we would overflow, set it to true
        } else setOnLastPage(false); //prevents component from being stuck on last page when data array is empty(waiting for http request data)

        const items = [...data].splice(start, MAX_LIST_RESULTS); //now create new array, we dont want to manipulate the passed prop and splice it to display the wanted paginated results
        setDisplayedResults(items);//now set the items to be displayed in the component
    }, [page, data]);

    const handlePageChange = pageWay => {
        const newPage = page + pageWay;

        if (newPage < START_PAGE) return; //prevent going to lower page than 1 (the start page)
        if (pageWay === 1 && onLastPage) return; //check whether user wants to see next page of results and prevent going further if the app hit the last page
        
        if (onLastPage) setOnLastPage(false); //if the above statement proves to be false, its only logical we arent on last page yet

        setPage(newPage);//set the page to update pagination results above
    }

    return (
        <div className="movie_list_box">
            {displayUI && <h2>{title}</h2>}
            <div className="movie_list_content">
                {displayedResults.map(m => <MovieDisplay key={m.id} data={m} imgSrc={m.poster_path}/>)}
            </div>
            {displayUI && (
                <>
                <button className="movie_list_btn movie_list_goback" disabled={page === 1} onClick={() => handlePageChange(-1)}><i className="fa fa-chevron-left"></i></button>
                <button className="movie_list_btn movie_list_goforward" disabled={onLastPage} onClick={() => handlePageChange(1)}><i className="fa fa-chevron-right"></i></button>
                </>
            )}
        </div>
    )
}
