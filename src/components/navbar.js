import React from 'react';
import { useState } from 'react';
import { BsSearch } from "react-icons/bs"
import { BiUserCircle } from "react-icons/bi"
import { Link } from 'react-router-dom';
import axios from "axios";

import { baseurl } from '../utils/api';

import "../styles/navbar.css";



const Navybar = () => {

    const[ isOpen, setIsopen]= useState(false);

    const handlePayment = async() => {
        try {
            const {data} = await axios.post(baseurl+"/payment/checkout",{
                title: "Prime Video",
                // email: "Chait@gmail.com",
                desc: "test",
                price: 1200
            },{
              headers: {
                Authorization: "Bearer "+ localStorage.getItem("token")
              }
            });
            localStorage.setItem("cs_id", data.id);
            window.location.assign(data.url);
        } catch (error) {
          console.log(error);
        }
      }

    return (

<div className='parent-class'>

        <div className='nav-parent'>

<Link to="/primepage"><div><b style={{color:'white'}}>PrimeVideos</b></div></Link>
         


            <div>
                <select>
                    <option>Home</option>
                    <option>ALL</option>
                    <option>Movies</option>
                    <option>Tv Shows</option>
                </select>
            </div>

            <div>
                <select>
                    <option>Store</option>
                    <option>ALL</option>
                    <option>Rent</option>
                    <option>Channels</option>
                </select>
            </div>

            <div> <b>Live Tv</b></div>

            <div>
                <select>
                    <option>Categories</option>
                    <option>Adventure</option>
                    <option>Romance</option>
                    <option>Kids</option>
                    <option>Thriller</option>
                    <option>Love</option>
                    <option>Kids</option>
                </select>
            </div>

            <div>
                <Link to="/wishlist">
                <select>
                    <option>MyStuff</option>
                    <option>ALL</option>
                    <option>Wishlist</option>
                    <option>Rentals</option>
                </select>
                </Link>
            </div>


            <div className='nav-search'>

                <div>
                    <BsSearch onClick={()=> setIsopen(!isOpen)} type='button' className='search-btn'/>
                </div>

                  <div className='nav-end'>
                    <b>Cherry</b>
                    <div><BiUserCircle className='user'/></div>
                    </div>
                    

                    <div>
                    <Link type='button' onClick={handlePayment} to="/payment">
                        <select>
                        
                            <option>subscribe</option>
                            <option>Help</option>
                            <option>Accounts</option>
                            <option> settings</option>
                            <option>Signout</option>
                       
                        </select>
                        </Link>
                        
                        
                    </div>

                

            </div>

        </div>


<div className= {`inpsearch ${isOpen ? "open":"notopen"}`}>

    <div className='inp-search'>
        <BsSearch className='searchbar' />
        <input type='text' placeholder='Search' className='input-search'/>
    </div>
</div>



</div>


    )
}

export default Navybar;