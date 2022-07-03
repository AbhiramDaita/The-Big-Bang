import React from 'react';
import ShoppingBag from '../images/ShoppingBag.svg';
const ProfileMenuItem = ({title}) => {
   
    const onClick = ()=>{
        
    }
    
    return(
        <div className="ProfileMenuBox" onClick={onClick()} >
            <img src={ShoppingBag} style={{marginRight:"32px"}} />
            <p>{title}</p>
        </div>
    )
}

export default ProfileMenuItem;