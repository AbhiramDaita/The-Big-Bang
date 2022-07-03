import React from 'react';
import ForwardArrow from '../images/arrow_forward_ios.svg';
import PropTypes from 'prop-types';
const RightButton = ({reversed,onClick,oppClick})=>{
    return(
        <div>
           {reversed ? <button type="button" className="carouselBtn carouselBtnRev" onClick={oppClick}><img src={ForwardArrow} width="22px"/></button> : <button type="button" className="carouselBtn" onClick={onClick}><img src={ForwardArrow} width="22px"/></button> } 
        </div>
    )
}
RightButton.propTypes = {
    reversed: PropTypes.bool
}

export default RightButton;
