
import React from 'react';
import { movies } from '../redux/slices/moviesSlice';
import { tvshows } from '../redux/slices/tvshowsSlice';
import { useEffect, useState } from 'react';

import { BsCheckCircleFill, BsPlayCircleFill } from "react-icons/bs";
import { MdAddCircle } from "react-icons/md"
import { BiInfoCircle } from "react-icons/bi"
import { Link } from 'react-router-dom';

import { addwish } from '../redux/slices/wishlistSlice';



import "../styles/carousel.css";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Badge,

} from 'reactstrap';

import { useDispatch, useSelector } from 'react-redux';



function Slides(args) {


  const dispatch = useDispatch();

  const moviecarousel = useSelector((state) => state.primemovies.value.movies);
  const tvshowscarousel = useSelector((state) => state.primetvshows.value.tvshows);


  console.log(moviecarousel);
  console.log(tvshowscarousel);

  useEffect(() => {
    dispatch(movies())
    dispatch(tvshows())

  }, [])



  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === moviecarousel.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? moviecarousel.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = moviecarousel ? moviecarousel.length ? moviecarousel.map((item, i) => {


    return (

      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.i}
      >
        <Link to={"/details/" + item._id + "?type=movie"}>

          <img style={{ height: "100%", width: "100%" }} src={item.backdrop_path} alt={item.altText} />
        </Link>

        <div className='cfloat'>

          <div><b className='titlem'>{item.original_title}</b></div>
          <div className='censor'>

            <div><BsCheckCircleFill className='check' /></div>
            <div className='textt'>Included with Prime</div>
            <div>
              <Badge color="secondary">
                U/A 16+
              </Badge>
            </div>
          </div>
          <div className='controls'>
            <div><BsPlayCircleFill className='play' /></div>
            <div className='textt'>Play</div>


            <div><MdAddCircle onClick={() => dispatch(addwish({ id: item._id, type: "movie" }
            ))} type='button' className='wishlist' /></div>


            <div><BiInfoCircle className='details' /></div>
          </div>
        </div>


      </CarouselItem>
    );


  }) : [<p></p>] : [<p></p>];



  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
      fade={true}
    >
      <CarouselIndicators
        items={moviecarousel}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      {/* <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      /> */}
    </Carousel>
  );
}

export default Slides;