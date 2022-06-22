import React from 'react';
import Person from '../images/person_outline.svg';
import Rating from '@mui/material/Rating';
const ReviewBox = ()=>{
    return(
        <div className="reviewBox">
            <div className="imageOutline">
                <img src={Person} width="60px" />
            </div>
            <div className="description" align="left">
                         <h2 style={{margin:"0px"}}>Justin Muller</h2>
            <Rating name="read-only" value="4.5" readOnly />
            <p style={{fontSize:"20px",textAlign:"left",marginTop:"4px",marginBottom:"0px"}}>Lorem ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 
            the 1500. </p>
            <p style={{color:"#707070",fontSize:"14px",textAlign:"start"}}>3 days ago. 23 March 2022</p>
            </div>
        </div>
    
    )
}

export default ReviewBox;