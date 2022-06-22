import React from 'react';
import SuccessFull from '../images/Successfull.svg';
import Button from '../components/Button';
import SecondaryButton from '../components/SecondaryButton';
const OrderBox = () =>{
    const data = [{"name":"Appalu x 2kg"},{"name":"Pachadi x 2kg"}];
    const listItems = data.map((d)=> <li key={d.name} style={{fontFamily:"Ubuntu",opacity:"0.5",fontSize:"14px"}}>{d.name}</li>)
    return(
        <div className="OrderBox">
            <div className="OrderTopDet">
                <p style={{margin:"0px 90px 0 0 ",fontSize:"24px"}}>Order ID: #981556375</p>
                <p style={{margin:"6px 15px 0 0",fontSize:"14px",opacity:"0.4"}}>Delivered on Wed,Dec 28,2021,2:30 PM</p>
                <img src={SuccessFull} />
            </div>
            <div className="OrderDet">
                <p style={{margin:"0",fontSize:"13px",opacity:"0.4"}}>Mettugada | Wed, Dec 29,2021,2:09 PM</p>
                <p id="MoreDet">View Details</p>
            </div>
            <hr style={{border:"1px dashed darkgray",margin:"0 9px 0 2px"}}/>
            <div className="ItemsList">
                <ul>
                    {listItems}
                </ul>
            </div>
            <div className="ActionsList">
                <ul>
                <li>
                    <Button text="Reorder" />
                </li>
                <li><SecondaryButton title="Help" diff={true}/></li>
                </ul>
            </div>
        </div>
    )
}

export default OrderBox;
