import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../Utility/contant';
import { addTrailerVideo } from '../Utility/moviesSlice';

const useMovieTrailer = (movieId) => {
    
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId +"/videos?Language=en-US", API_OPTIONS);
        const json = await data.json();
        

        const filterdata = json.results.filter(video => video.type === "Trailer");
        
        // const trailer = filterdata.length == 0 ? filterdata[0] : json.results[0];
        const trailer = filterdata[0];
        
        dispatch(addTrailerVideo(trailer));

    };

    useEffect(() => {
        getMovieVideos();
    }, []);
}

export default useMovieTrailer
