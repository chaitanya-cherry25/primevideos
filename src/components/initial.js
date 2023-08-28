import React from 'react'
import "../styles/initial.css";
import { Link } from 'react-router-dom';

const Initial = () => {
  return (

    <div className='init-parent'>

      <div className='init-c1'>
        <div><h className="hhh">Welcome To Prime video</h></div>

        <div><p className='text'>Watch the latest movies, TV shows, and award-winning Amazon Originals</p></div>



        <Link to='/register'> <div><button className='sign'>Sign In To Join Prime</button></div></Link>
      </div>


      <div className='init-c2'>

        <img src='https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP._SX1440_CR575,0,865,675_QL80_AC_FP_.jpg' />

      </div>
    </div>
  )
}


export default Initial