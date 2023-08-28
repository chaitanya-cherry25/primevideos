import React from 'react';
import { useDispatch } from 'react-redux';
import { movies } from '../redux/slices/moviesSlice';
import { tvshows } from '../redux/slices/tvshowsSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { AiFillStar } from "react-icons/ai"

import "../styles/home.css";
import { Link } from 'react-router-dom';
import { type } from '@testing-library/user-event/dist/type';

const Home = () => {

  const dispatch = useDispatch();

  const movieList = useSelector((state) => state.primemovies.value.movies);

  const tvshowslist = useSelector((state) => state.primetvshows.value.tvshows)


  console.log(movieList);
  console.log(tvshowslist);

  useEffect(() => {
    dispatch(movies())
    dispatch(tvshows())

  }, [])





  return (
    <div className='cards-panel'>
      {
        movieList && movieList.length && movieList.map(e => {
          return (

            <Link to={"/details/"+e._id+"?type=movie"} >

              <div className='movie-card'>
                <div><img className='img' src={e.backdrop_path} alt="movieimg" /></div>

                <div className='overlay-card'>

                  <div>
                    <span className='card__title'>{e.title}</span>
                    <span style={{display:"flex",alignItems:"center", gap:"0.5rem", color:"white"}}> Rating <AiFillStar style={{color:"gold"}} /> {e.vote_average}</span>
                  </div>

                  <div className='card_description'>{e.overview}</div>

                </div>

              </div>
              </Link>
          );
        })
      }

    </div>
  )
}
export default Home