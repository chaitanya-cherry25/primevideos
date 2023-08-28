import React  from 'react'
import { login } from '../redux/slices/userslice';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'

import '../styles/login.css'

 const Login = () => {

  const [userDetails, setUserDetails]= useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit =(e)=>{
    e.preventDefault();
    dispatch(login({userDetails, navigate}))
  }
  
  return (
    <div className='login-parent'>

    <div><img src='https://m.media-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png' alt="ppprime"/></div>

<div style={{display:"flex",flexDirection:"column",gap:"1rem", border:"0.2px solid black", padding:"1rem"}}>

<b style={{color:"black"}}>Create Your Account</b>

<form className='lll'  onSubmit={handleSubmit}>


<input onChange={(e)=>setUserDetails({...userDetails, email:e.target.value})} type='email' name='email' placeholder='Email'/>

<input onChange={(e)=>setUserDetails({...userDetails, password:e.target.value})} type='text' name='password' placeholder='Password'/>

<div><button onClick={handleSubmit} className='lbutton'>SignIn Amazon Account</button></div>

<p>By creating an account, you agree to the Amazon <br/>Conditions of Use and Privacy Notice.</p>

<Link to="/register"> Don't Have An Account</Link>

</form>



</div>

  </div>
  )
}

export default Login