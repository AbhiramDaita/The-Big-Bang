import React from 'react';
import AddressBox from '../components/AddressBox';
const AddressContainer = () =>{
    return(
        <div className="Addresses">
                    <div className="AddressesTitle">
                        <p style={{textAlign:"start",width:"fit-content"}}>Your Addresses :</p>
                    </div>
                    <div className="AddressesContent">
                        <AddressBox />
                        <AddressBox />
                        <AddressBox />
                    </div>
        </div>
    
    )
}

export default AddressContainer;