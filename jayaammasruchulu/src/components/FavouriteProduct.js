import React from 'react'
import ProductSuggestionCard from '../components/ProductSuggestionCard';
import Heart from '../images/Heart2.svg';

const FavouriteProduct = ()=>{
    return(
        <div style={{width:"fit-content"}}>
            <div className="FavC">
                <img src={Heart} alt="Heart" width="32px"/>
            </div>
            <ProductSuggestionCard />
        </div>
    )
}

export default FavouriteProduct;