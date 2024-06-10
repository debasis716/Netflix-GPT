import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackgroud from './VideoBackgroud';

const MainContainer = () => {
  const movies=useSelector(store=>store.movies?.nowPlayingMovies);
  if(movies===null) return;
  const mainMovies=movies[0];
  console.log(mainMovies);

  const { original_title, overview, id}=mainMovies;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackgroud movieId={id}/>
    </div>
  )
}

export default MainContainer;
