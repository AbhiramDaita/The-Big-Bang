import React from 'react';
import PropTypes from 'prop-types';

const TeritaryButton = ({filled,title,cap,onClick,onPress}) =>{
    return(
        <div className="centeredBtn">
                    {filled ? <div className="TeritaryButton TeritaryButtonFilled" onClick={onClick}>
            <p style={{margin:"0px",fontWeight:"bold",color:"white"}}>ADD MORE DETAILS</p>
            <span style={{fontSize:"11px",opacity:"0.3",fontWeight:"bold"}}>For more Accuracy</span>
        </div> :  <div className="TeritaryButton" onClick={onPress}>
            <p style={{margin:"0px",fontWeight:"bold",color:"#CA965C"}}>{title}</p>
            <span style={{fontSize:"11px",opacity:"0.4",fontWeight:"bold"}}>{cap}</span>
        </div>}
        </div>
    )
}

TeritaryButton.propTypes = {
    filled:PropTypes.bool,
};

export default TeritaryButton;