import React from 'react'
import Previous from '../images/Previous.svg';
import SecondaryButton from './SecondaryButton';
import TeritaryButton from './TeritaryButton';
import ProfileMenu from '../components/ProfileMenu';
import OrderBox from '../components/OrderBox';
import Notice from '../components/Notice';
const BottomSheet = () =>{
    return(
        <div className="BottomSheetBox">
            <div className="BottomSheetTitle">
                <img src={Previous} style={{marginRight:"30px"}}/>
                <h3>Set Delivery Location</h3>
            </div>
            <div className="BottomSheetInput">
                <form>
                    <input type="text" id="addressInput" disabled placeholder="Address"/>
                    <input type="text" id="DoorInput" placeholder="Door No/Flat No" />
                    <input type="text" id="LandMarkInput" placeholder="Landmark" />
                </form>
            </div>
            <SecondaryButton title="Save & Proceed" />
            <TeritaryButton title="SKIP & ADD LATER" cap="checkout products" filled={false}/>
            <TeritaryButton title="ADD MORE DETAILS" cap="For more accuracy" filled={true}/>
            <ProfileMenu title="Orders"/>
            <ProfileMenu title="Favourites"/>
            <ProfileMenu title="Addresses"/>
            <OrderBox />
            <Notice />
        </div>
        )
}

export default BottomSheet;