import React from 'react'
import Button from '../components/Button';
const ForgotPassword = ()=>{
    return(
        <div className="LoginBox">
            <h1 style={{fontFamily:"Ubuntu"}}>Forgot Password?</h1>
            <p style={{fontFamily:"Ubuntu"}}>We got you covered. Enter email linked to your account.<br></br>
            </p>
            <form>
                <input type="email" placeholder="Email or Phone" />
                <p>Reset?</p>
            </form>
            <Button text="CONTINUE"/>
        </div>
        )
}

export default ForgotPassword;
