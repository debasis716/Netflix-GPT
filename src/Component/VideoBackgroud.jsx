import React, { useEffect } from 'react'
import { API_OPTIONS, YOUTUBE_BASE_URL } from '../Utility/contant';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../Utility/moviesSlice';
import useMovieTrailer from '../Hooks/useMovieTrailer';

const VideoBackgroud = ({movieId}) => {
  
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        // src={YOUTUBE_BASE_URL + trailerVideo?.key + "?&autoplay=1&mute=1"}
        src={"https://www.youtube.com/embed/hXzcyx9V0xw?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullscreen>
        </iframe>
    </div>
  )
}

export default VideoBackgroud
