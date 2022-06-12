import React, { useState } from 'react'
import SignUp from '../components/SignUp';
import ErrorMessage from '../components/errorMessage';

const SignUpPage =()=>{
  const [loading,setLoading] = useState(false); const [errorBool,setErrorBool] = useState(false);
  const onSubmit = (name,email,password)=>{

    if(email == ""){
      setErrorBool(true);
    }
  }
  return(
    <div>
   
    {errorBool ?  <ErrorMessage title="Account Registration" message="There is already a account registered with this account"/>:""}
     <img src="https://drive.google.com/uc?export=view&id=12dg2B82gIVqxDWlNz9ovAEnJD-GE2b6_" alt="Page Logo" width="90%" style={{marginBottom:"30px"}}/>
      <SignUp onSubmit={onSubmit}/>
      <ul className="endCredsList">
        <li>Conditions of Use</li>
        <li>Privacy</li>
        <li>Security</li>
      </ul>
      <p style={{marginTop:"40px",color:"rgba(0,0,0,0.1)"}}>Jayaammas Ruchulu-{new Date().getFullYear()}</p>
    </div>
  )
}

export default SignUpPage;