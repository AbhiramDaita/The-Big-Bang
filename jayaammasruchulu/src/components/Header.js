import React from 'react'
import ShoppingCart from '../images/shopping_cart.svg';
import ProfileOutline from '../images/person_outline.svg';
const Header = ()=>{
    return(
        <div className="HeaderBox">
            <div className="ImageDiv">
                <img src="https://drive.google.com/uc?export=view&id=12dg2B82gIVqxDWlNz9ovAEnJD-GE2b6_" width="220px" />
            </div>
            <div className="NavigationMenu">
                         <ul>
                <li style={{marginTop:"6px"}}>Home</li>
                <li style={{marginTop:"6px"}}>Shop</li>
                <li><img src={ShoppingCart} /></li>
                <li><img src={ProfileOutline} /></li>
            </ul>
            <form>
                <input placeholder="Search" type="text"/>
            </form>
            </div>
        </div>
    )
}

export default Header;