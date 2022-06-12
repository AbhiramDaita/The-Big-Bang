import React, { Component ,useState} from 'react'
import  Login  from '../components/Login';
import ErrorMessage from '../components/errorMessage';

const LoginPage = ()=>{
    const [errorBool, setErrorBool] = useState(false);
    const onClick = (email,password)=>{
      console.log(email,password)
      if(!email){
        setErrorBool(true);
      }
    }
    return (
      <div>
      {errorBool ? <ErrorMessage title="Login Error" message="There is no account registered with this account"/> : ""}
        <img src="https://drive.google.com/uc?export=view&id=12dg2B82gIVqxDWlNz9ovAEnJD-GE2b6_" alt="Page Logo" width="90%" style={{marginBottom:"30px"}}/>
      <Login onSubmit={onClick}/>
      <ul className="endCredsList">
        <li>Conditions of Use</li>
        <li>Privacy</li>
        <li>Security</li>
      </ul>
      <p style={{marginTop:"40px",color:"rgba(0,0,0,0.1)"}}>Jayaammas Ruchulu-{new Date().getFullYear()}</p>
      </div>
    )
}

export default LoginPage;
