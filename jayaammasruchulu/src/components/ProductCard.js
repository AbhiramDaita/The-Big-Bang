import React from 'react'
import Food from '../images/food.jpg';
import Rating from '@mui/material/Rating';
const ProductCard = ()=>{
    return(
        <div className="ProductCardBox">
            <img src={Food} width="390px" />
            <h2 style={{textAlign:"start",paddingLeft:"20px",marginBottom:"0"}}>Ginger Masala</h2>
            <div className="ratingsHolder">
                            <Rating name="read-only" value="2" readOnly />
            </div>
            <p style={{fontWeight:"lighter",padding:"20px",margin:"0"}}>Lorem Ipsum is a duplicate text which is used in most printing industries since 1980 which is a duplicate text. It is what it is.</p>
            <div className="ProductPrice">
                <p style={{fontSize:"25px",fontWeight:"520"}}><sup>&#8377;</sup> 980<sub style={{opacity:".5",fontSize:"14px"}}>/kg</sub></p>
                <button type="button"  className="addToCartBtn">Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;