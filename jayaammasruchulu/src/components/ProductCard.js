import React from 'react'

import Rating from '@mui/material/Rating';
const ProductCard = ({title,ratings,description,price,url})=>{
    return(
        <div className="ProductCardBox">
            <img src={url} width="390px" style={{borderRadius:"10px 10px 0px 0px"}} />
            <h2 style={{textAlign:"start",paddingLeft:"20px",marginBottom:"0"}}>{title}</h2>
            <div className="ratingsHolder">
                            <Rating name="read-only" value={ratings} readOnly />
            </div>
            <p style={{fontWeight:"lighter",padding:"20px",margin:"0"}}>{description}</p>
            <div className="ProductPrice">
                <p style={{fontSize:"25px",fontWeight:"520"}}><sup>&#8377;</sup>{price}<sub style={{opacity:".5",fontSize:"14px"}}>/kg</sub></p>
                <button type="button"  className="addToCartBtn">Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;