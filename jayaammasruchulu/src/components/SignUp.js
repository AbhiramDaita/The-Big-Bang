import React, { useState } from 'react'
import Button from '../components/Button';
import ProgressPage from '../components/ProgressPage';  
const SignUp = ({onSubmit})=>{
  const [name,setName] = useState("");
  const[email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false); 
  const onClick = ()=>{
    setLoading(true);
    onSubmit(name,email,password);
  }
  return(
        <div className="signupComponent">
        {loading ? <ProgressPage/> : ""}
             <div className="LoginBox">
        <h1 style={{marginBottom:"40px"}}>Sign Up</h1>
        <form>
          <input placeholder="Username" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
          <input placeholder="Email or Phone" type="email|number" id="emailInput" style={{display:"block"}}  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <input placeholder="Password" type="password" id="passwordInput" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <span style={{display:"block",fontSize:"12px",textAlign:"start",marginLeft:"10px"}}>By Clicking Sign-Up, you agree to our Conditions of Use.</span>
        </form>
        
        <Button text="Sign Up" onClick = {onClick} />
      </div>
    </div>)
}
export default SignUp;