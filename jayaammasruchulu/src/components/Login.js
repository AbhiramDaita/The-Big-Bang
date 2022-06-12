import React,{useState} from 'react'
import Button from './Button';
import ProgressBar from '../components/ProgressPage';

const Login= ({onSubmit}) =>{
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false); 
  const onClick = (e)=>{
    e.preventDefault();
    onSubmit(email,password);
    setLoading(true);
  }
  return (
        <div>
         {loading ? <ProgressBar height="410.94px"/>:""}
          <div className="LoginBox">
        
        <h1 style={{marginBottom:"40px"}}>Login</h1>
        <form>
          <input placeholder="Email or Phone" type="email|number" id="emailInput" style={{display:"block"}} value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input placeholder="Password" type="password" id="passwordInput" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </form>
        <Button text="Login" onClick={onClick}/>
        <p className="ToFPassword">Forgot your Password?</p>
      </div>
      </div>
  )
}

export default Login
