import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <div style={{
            display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "2rem", marginTop:"1rem"
        }}>


<div><img style={{backgroundColor:"white", borderRadius:"10px",padding:"0.5rem", paddingLeft:"0.5rem", paddingRight:"0.5rem"}} src='https://m.media-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png' alt="pppriime"/></div>
            <h1 style={{ color: "white" }}>Payment Successfull</h1>


            <Link to="/primepage">
                <button style={{ color: "black", backgroundColor: "gold", borderRadius: "10px" }}> Go to Home page</button>
                </Link>
        </div>
    )
}

export default Payment
