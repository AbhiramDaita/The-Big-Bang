import React, { useState } from 'react'
import Verification from '../components/Verification';
import ErrorMessage from '../components/errorMessage';

const VerificationPage =()=>{
  const [errorBool,setErrorBool] = useState(false);
  const onClick = (code)=>{
  }
  return(
        <div>
        {errorBool ? <ErrorMessage title="Invalid Verification Code" message="Please Check the verification code sent to your mail."/> : ""}
        <img src="https://drive.google.com/uc?export=view&id=12dg2B82gIVqxDWlNz9ovAEnJD-GE2b6_" alt="Page Logo" width="90%" style={{marginBottom:"30px"}}/>
      <Verification onClick={onClick}/></div>
  )
}

export default VerificationPage;
