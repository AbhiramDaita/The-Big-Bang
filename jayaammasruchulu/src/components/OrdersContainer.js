import React from 'react'
import OrderBox from '../components/OrderBox';

const OrdersContainer = () => {
    return(
        <div className="OrdersContainerBox">
            <div className="OrdersContainerTitle">
                <p style={{textAlign:"start",fontSize:"24px"}}>Your Orders :</p>
            </div>
            <div className="OrdersContainerContent" align="center">
                <OrderBox />
                <OrderBox />
                <OrderBox />

            </div>
        </div>
    )
}

export default OrdersContainer;