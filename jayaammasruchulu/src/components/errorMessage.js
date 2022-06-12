import React from 'react'
import pic from '../images/Vector.svg';
const errorMessage =({title,message})=>{
  return(
        <div className="errorBox">
        <div className="errorTitle">
              <img src={pic} alt="error" style={{marginRight:"10px"}}/>
        <h5 style={{margin:"0px"}}>{title}</h5>
        </div>
        <span>{message}</span>
    </div>
  )
}

export default errorMessage;