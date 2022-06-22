import React from 'react'
import ProductSuggestionCard from '../components/ProductSuggestionCard';
const CategoryBox = ({title,quote})=>{
    return(
        <div className="CategoryBox"> 
            <h2 style={{marginBottom:"0px",marginTop:"0px",fontSize:"30px"}}>{title}</h2>
            <span style={{color:"darkgray",fontSize:"14px"}}>A wide category of home made foods made out of best-in quality flour.</span>
            <div className="holder">
                <ProductSuggestionCard />
                <ProductSuggestionCard />
                <ProductSuggestionCard />
            </div>
        </div>
    )
}

export default CategoryBox;
