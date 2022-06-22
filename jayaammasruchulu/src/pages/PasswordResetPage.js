import React, {useState} from 'react'
import ForgotPassword from '../components/ForgotPassword';
import ErrorMessage from '../components/errorMessage';
import PasswordConfirmation from '../components/PasswordConfirmation';
const PasswordResetPage = ()=>{
  return(
    <div>
    <ErrorMessage title="Account Not Found" message="There is no account registered with this email or phone"/>
     <img src="https://drive.google.com/uc?export=view&id=12dg2B82gIVqxDWlNz9ovAEnJD-GE2b6_" alt="Page Logo" width="90%" style={{marginBottom:"30px"}}/>
      <PasswordConfirmation />
            <ul className="endCredsList">
        <li>Conditions of Use</li>
        <li>Privacy</li>
        <li>Security</li>
      </ul>
      <p style={{marginTop:"40px",color:"rgba(0,0,0,0.1)"}}>Jayaammas Ruchulu-{new Date().getFullYear()}</p>
    </div>
  )  
}
export default PasswordResetPage;
