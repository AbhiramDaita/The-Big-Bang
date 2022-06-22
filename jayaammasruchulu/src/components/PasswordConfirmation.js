import React from 'react'
import Button from '../components/Button';
const PasswordConfiguration = () =>{
    return(
        <div className="LoginBox">
        <h1 style={{fontFamily:"Ubuntu"}}>Change your Password.</h1>
            <form>
                <input type="password" placeholder="New Password" />
                <input type="password" placeholder="Confirm New Password"/>
            </form>
            <Button text="Submit"/>
        </div> 
    )
}

export default PasswordConfiguration;