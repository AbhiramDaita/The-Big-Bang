import React from 'react';
import ShoppingBag from '../images/ShoppingBag.svg';
const ProfileMenu = ({title}) => {
    return(
        <div className="ProfileMenuBox">
            <img src={ShoppingBag} style={{marginRight:"32px"}} />
            <p>{title}</p>
        </div>
    )
}

export default ProfileMenu;