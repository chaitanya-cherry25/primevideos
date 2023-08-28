import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getwish } from '../redux/slices/wishlistSlice';
import { addwish } from '../redux/slices/wishlistSlice';
import {loggedInuser} from '../redux/slices/userslice';
import { AiFillStar } from "react-icons/ai"
import { Link } from 'react-router-dom';

import Navybar from '../components/navbar';



import "../styles/wishlist.css";

 const Wishlist = () => {

  const dispatch = useDispatch();

  const wishList = useSelector((state) => state.primewishlist.value.wishlistGet);
  

  const loguser = useSelector((state)=>state.User.value.loggedInuser)

  console.log(loguser)

  // console.log(addw)

  console.log(wishList)



  useEffect(() => {
    dispatch(getwish());
    dispatch(loggedInuser());

  }, [])

  return (
    <div>
      
<Navybar/>

    <div className='wishlist-panel'>
    {
      wishList && wishList.length && wishList.map(e => {
        return (

          <Link to={"/details/"+e.id+"?type=movie"} >

            <div className='wish-card'>
              <div><img className='wishimg' src={e.movieDetails.backdrop_path} alt="movieimg" /></div>

              <div className='wishoverlay-card'>

                <div>
                  <span className='car__title'>{e.movieDetails.title}</span>
                  <span style={{display:"flex",alignItems:"center", gap:"0.5rem", color:"white"}}> Rating <AiFillStar style={{color:"gold"}} /> {e.movieDetails.vote_average}</span>
                </div>

                <div className='wish_description'>{e.movieDetails.overview}</div>

              </div>

            </div>
            </Link>
        );
      })
    }

  </div>

  </div>
  )
}

export default Wishlist;
