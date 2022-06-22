import React from 'react'
import Food2 from '../images/food2.svg';
import Rating from '@mui/material/Rating';

const ProductSuggestionCard = () => {
    return(
            <div style={{display:"flex"}}>
                        <div className="SuggestionCard">
            <img src={Food2} />
            <h1 style={{marginTop:"10px",marginBottom:"5px"}}>Pastry</h1>
            <Rating name="read-only" value="4.5" readOnly /><span>10,980</span>
            <p style={{fontSize:"21px",marginTop:"10px"}}>&#8377; 980 <sub>/kg</sub></p>
        </div>
            </div>
        )
}

export default ProductSuggestionCard;