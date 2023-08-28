import React from 'react'
import Home from "../components/home";
import Navybar from '../components/navbar';
import Slides from '../utils/carousel';
import CardCarousel from '../components/cardCarousel';
import { Outlet } from 'react-router-dom';

const PrimeHome = () => {
    return (

        <div className='prime-parent'>

            <Navybar className="navbar-parent" />
            <Slides />
            <CardCarousel />
            <Home />

<Outlet/>
        </div>
    )
}

export default PrimeHome