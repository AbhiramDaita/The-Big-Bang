import React from 'react'
import Rating from '@mui/material/Rating';

const ProductSuggestionCard = ({url,title,ratingCount,reviewCount,price}) => {
    return(

                        <div className="SuggestionCard">
            <img src={url} style={{width:"85%",borderRadius:"10px"}}/>
            <h1 style={{marginTop:"10px",marginBottom:"5px"}}>{title}</h1>
            <Rating name="read-only" value={ratingCount} readOnly /><span id="ratingSG">{reviewCount}</span>
            <p style={{fontSize:"21px",marginTop:"10px"}}>&#8377; {price} <sub>/kg</sub></p>
        </div>
  
        )
}

export default ProductSuggestionCard;