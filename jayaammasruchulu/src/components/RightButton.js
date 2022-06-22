import React from 'react';
import ForwardArrow from '../images/arrow_forward_ios.svg';
import PropTypes from 'prop-types';
const RightButton = ({reversed})=>{
    return(
        <div>
           {reversed ? <button type="button" className="carouselBtn carouselBtnRev"><img src={ForwardArrow} width="22px"/></button> : <button type="button" className="carouselBtn"><img src={ForwardArrow} width="22px"/></button> } 
        </div>
    )
}
RightButton.propTypes = {
    reversed: PropTypes.bool
}

export default RightButton;
