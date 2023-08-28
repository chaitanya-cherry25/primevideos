import "../styles/register.css";
import { useDispatch } from 'react-redux';
import React, { useState } from 'react'

import { register } from '../redux/slices/userslice';
import { Link } from "react-router-dom";



 const Register = () => {

  const [userDetails, setUserDetails]= useState({});


  const dispatch = useDispatch();

    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(register(userDetails))
    }

  return (


    <div className='register-parent'>

      <div><img src='https://m.media-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png' alt="ppprime"/></div>

<div style={{display:"flex",flexDirection:"column",gap:"1rem", border:"0.2px solid black", padding:"1rem"}}>

<b style={{color:"black"}}>Create Your Account</b>

  <form className='ffff'  onSubmit={handleSubmit}>

<input onChange={(e)=>setUserDetails({...userDetails, name:e.target.value})} type='text' name='name' placeholder='First Name & Last Name'/>

<input onChange={(e)=>setUserDetails({...userDetails, email:e.target.value})} type='email' name='email' placeholder='Email'/>

<input onChange={(e)=>setUserDetails({...userDetails, password:e.target.value})} type='text' name='password' placeholder='Password'/>

<div><button onClick={handleSubmit} className='rbutton'>Create Your Amazon Account</button></div>

<p>By creating an account, you agree to the Amazon <br/>Conditions of Use and Privacy Notice.</p>

<Link to="/login"><p>Already Have an accounr <a>Sign In</a></p>
</Link>
  </form>



</div>

    </div>
  )
}

export default Register
