import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../Utility/contant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../Utility/moviesSlice';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies ';
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse =() => {
  useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};
export default Browse;
