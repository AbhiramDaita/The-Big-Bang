import React from 'react'
import Location from '../images/location.svg';
const AddressBox = () =>{
    return(
        <div className="AddressBox">
            <div className="Location">
                            <img src={Location} style={{marginTop:"12px"}} />
            <p>8-3-46/a,
            mettugada,mahbubnagar,Telangana-509001
            </p>
            </div>
            <div className="addressAction">
                <span >EDIT</span>
                <span style={{marginLeft:"40px"}}>DELETE</span>
            </div>
        </div>)
}

export default AddressBox;