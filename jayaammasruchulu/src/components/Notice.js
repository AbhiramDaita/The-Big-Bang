import React from 'react';
import Attention from '../images/attention.svg';

const Notice = ()=>{
    return(
        <div className="NoticeBox">
            <div className="NoticeTitle">
                <img src={Attention} style={{marginRight:"9px"}}/>
                <h4 style={{margin:"0px"}}>Review your Order and address details to avoid cancellations.</h4>
            </div>
            <p style={{marginTop:"6px",marginBottom:"0px",fontFamily:"12px"}}>Note : If you made a cancellation within 60 seconds of placing your order, a 100% refund will be issued. No cancellations after 60 seconds. Read our cancellation Policy.</p>
        </div>
    )
}

export default Notice;