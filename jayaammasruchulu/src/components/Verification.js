import React,{useState} from 'react'
import ForwardArrow from '../images/arrow_forward_ios.svg';
const Verification = ({onClick})=>{
  const [current,setCurrent] = useState(1);
  const [code,setCode] = useState("");
  const onInput = (e)=>{
    if(!(e.target.value === "") && (current <= 5) ){
      document.getElementById(e.target.id).style.border="2px solid #ffa232";
      setCurrent((prev)=>prev+1)
      console.log(current)
      document.getElementsByClassName('codeInput')[current].focus();
    }
    else if(e.target.value.length === 0){
      document.getElementById(e.target.id).style.border="2px solid rgba(0,0,0,0.2)";
    }

  }
  const onSubmit = ()=>{
      console.log("sghey")
  }

  return(
        <div className="VerificationBox">
        <h1 style={{textAlign:"start",fontFamily:"Ubuntu,sans-serif"}}>Phone Number Verification : </h1>
        <p style={{textAlign:"start",fontFamily:"Ubuntu,sans-serif"}}>Enter 5-digit code sent to your Phone :</p>
        <div className="codeInputs" style={{marginTop:"40px"}}>
          <input type="text" inputMode='numeric' className="codeInput"  id="firstInput" style={{width:"100px",height:"100px",textAlign:"center"}} maxLength="1" onChange={onInput} autoFocus/>
          <input type="text" inputMode='numeric' className="codeInput" id="secondInput" style={{width:"100px",height:"100px",textAlign:"center"}} maxLength="1" onChange={onInput}/>
          <input type="text" inputMode='numeric' className="codeInput" id="thirdInput" style={{width:"100px",height:"100px",textAlign:"center"}} maxLength="1" onChange={onInput}/>
          <input type="text" inputMode='numeric' className="codeInput" id="fourInput" style={{width:"100px",height:"100px",textAlign:"center"}} maxength="1" onChange={onInput}/>
          <input type="text" inputMode='numeric' className="codeInput" id="fiveInput" style={{width:"100px",height:"100px",textAlign:"center"}} maxLength="1" onChange={onInput}/>
        </div>
        <button className="verifBtn" type="submit" onClick={()=>onSubmit()}><img src={ForwardArrow} width="80%"/></button>
        <p style={{marginTop:"40px",color:"rgba(0,0,0,0.1)"}}>Jayaammas Ruchulu-{new Date().getFullYear()}</p>    
      </div>
  )
}

export default Verification;