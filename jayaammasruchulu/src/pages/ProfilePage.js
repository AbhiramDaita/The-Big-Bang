import React from 'react'
import User from '../images/User.svg';
import arrow from '../images/arrow_forward_ios.svg'
import {Menu, MenuItem} from '@mui/material';
import ProfileMenuItem from '../components/ProfileMenuItem';
import OrdersContainer from '../components/OrdersContainer';
const ProfilePage = ()=>{
    const [user,setUser] = React.useState({
        userName :"Ab",
        email:"aram18184@gmail.com",
        phone:"+91 8897076204"
    });
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e)=>{
        setAnchorEl(e.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };



    return(
        <div className="ProfilePage">
            <div className="TitleBox" style={{height:"500px",display:"block",paddingTop:"50px"}}>
                <div className="TitleHolder" >
                              <div className="ProfileBox">
                    <img src={User} alt="User" />
      
                </div>
                <div className="ProfileDet">
                    <div className="UserDet">
                        <p style={{fontSize:"30px",margin:"0px 15px 0px 0px"}}>Hello,{user.userName}</p>
                        <div className="OptionsButton">
                            <img src={arrow} width="20px" onClick={handleClick}/>
                                          <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps ={{
                        'aria-labelledby':'basic-button'
                    }}>
                        <MenuItem onClick={handleClose}>Update Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                        </div>
                    </div>
                    <p style={{opacity:"0.7",marginTop:"10px"}}>{user.email},{user.phone}</p>
                </div>
                </div>
            <div className="ProfilePageContents">
                <div className="ProfileMenu" align="center">
                    <ProfileMenuItem title="Orders" />
                    <ProfileMenuItem title="Favourites" />
                    <ProfileMenuItem title="Addresses"  />
                </div>
                <OrdersContainer />
            </div>
            </div>
        </div>
    )
}

export default ProfilePage;