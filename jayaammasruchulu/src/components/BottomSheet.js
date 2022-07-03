import React from 'react'
import Previous from '../images/Previous.svg';
import SecondaryButton from './SecondaryButton';
import TeritaryButton from './TeritaryButton';
import MapContainer from '../components/MapContainer';
import $ from 'jquery';
const BottomSheet = () =>{ 
    const [addVisible,setaddVisible] = React.useState(false);
    const [actVisible,setactVisible] = React.useState(true);
    const onClick = ()=>{
        setaddVisible(true);
        setactVisible(false);
    }
    React.useEffect = ()=>{

    }
    return(
        <div className="BottomSheetBox">
            <div className="BottomSheetContent">
                            <div className="BottomSheetTitle">
                <img src={Previous} style={{marginRight:"30px"}}/>
                <h3>Set Delivery Location</h3>
            </div>
            <div className="map">
                <MapContainer />
            </div>
            <form>
                <input type="text" id="addressInput" disabled placeholder="Address"/>
            </form>
            {addVisible ?             <div className="BottomSheetInput">
                <form>
                    
                    <input type="text" id="DoorInput" placeholder="Door No/Flat No" />
                    <input type="text" id="LandMarkInput" placeholder="Landmark" />
                </form>
                <SecondaryButton title="Save & Proceed" />
            </div>
             :""}

            {actVisible ?         <div className="ActnBtns">
                            <TeritaryButton title="SKIP & ADD LATER" cap="checkout products" filled={false}/>
            <TeritaryButton title="ADD MORE DETAILS" cap="For more accuracy" filled={true} onClick={onClick}/>
            </div> : ""}
            </div>

        </div>
        )
}

export default BottomSheet;