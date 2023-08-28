import React from 'react';
import { useDispatch } from 'react-redux';
import { movies } from '../redux/slices/moviesSlice';
import { tvshows } from '../redux/slices/tvshowsSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import Carousel from "react-multi-carousel";
import "../styles/cardCarousel.css";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const CardCarousel = () => {

    const dispatch = useDispatch();

    const moviecardList = useSelector((state) => state.primemovies.value.movies);

    const tvcardlist = useSelector((state) => state.primetvshows.value.tvshows)


    console.log(moviecardList);
    console.log(tvcardlist);

    useEffect(() => {
        dispatch(movies())
        dispatch(tvshows())

    }, []);


    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 767, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (

        <div className="parent">
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
            >
                {moviecardList.map((e, index) => {
                    if (index > 9 && index < 19) {
                    return (
                        <Link to={"/details/"+e._id+"?type=movie"}>
                        <div className="slider" key={index}>
                            <img src={e.poster_path} alt="movie" />
                        </div>
                        </Link>
                    );

                    } 
                })
                }
            </Carousel>

        </div>
    )
}

export default CardCarousel;