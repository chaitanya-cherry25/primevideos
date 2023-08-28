import "../styles/movieDetails.css";
import { useSearchParams, useParams } from 'react-router-dom';

import { moviedetails } from '../redux/slices/moviesSlice';
import { tvdetails } from '../redux/slices/tvshowsSlice';

import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';

import React, { useEffect } from 'react';
import Navybar from "../components/navbar";


import YouTube, { YouTubeProps } from 'react-youtube';



const MovieDetails = () => {



  const dispatch = useDispatch();


  const [searchParams] = useSearchParams();
  let params = useParams();

  console.log(params);

  console.log(searchParams.get("type"));


  useEffect(() => {

    if (searchParams.get("type") === "movie") {
      dispatch(moviedetails(params.id))
    }

    else {
      dispatch(tvdetails(params.id))
    }

  }, []);

  const primemoviedetails = useSelector((state) => state.primemovies.value.movieDetails)
  

  console.log(primemoviedetails);


  const opts = {
    height: "700",
    width: "1500",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (

    <div>
      <Navybar/>
    <div details-parent>

      <div>
        {primemoviedetails.video && <YouTube
          videoId={primemoviedetails.video[0].key}
          opts={opts}
          onReady={onReady}
        />}
      </div>

      <div className="detailssss">
        <div><h1 style={{color:"white"}}>{primemoviedetails.title}</h1></div>
        <div><p style={{color:"white"}}>Release Date:{primemoviedetails.release_date}</p></div>
        <div><b style={{color:"white"}}>{primemoviedetails.overview}</b></div>

      </div>
    </div>

    </div>
  )
}

export default MovieDetails
