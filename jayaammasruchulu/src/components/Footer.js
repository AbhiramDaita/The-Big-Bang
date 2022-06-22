import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import ShopIcon from '@mui/icons-material/Shop';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import ForwardArrow from '../images/arrow_forward_ios.svg';


const Footer = ()=>{
    return(
        <div className="FooterBox">
            <div className="Socials" style={{height:"fit-content"}}>
                        <img src="https://drive.google.com/uc?export=view&id=12dg2B82gIVqxDWlNz9ovAEnJD-GE2b6_" alt="Page Logo" width="90%" />
                        <ul>
                            <li><InstagramIcon/></li>
                            <li><ShopIcon /></li>
                            <li><FacebookRoundedIcon  /></li>
                            <li><TwitterIcon /></li>
                        </ul>
            </div>
            <div className="MailingList">
                <h3 style={{textAlign:"start",marginBottom:"6px"}}>Mailing List</h3>
                <span style={{opacity:".5"}}>Sign up to our mailing list to get the latest updates about our new products.</span>
               <div className="MailingInput" style={{display:"flex"}}>
                 <form style={{width:"fit-content",paddingLeft:"0px",marginBottom:"0px"}}>
                    <input type="email" placeholder="Email" style={{marginLeft:"0px"}}/>
                </form>
                <button className="verifBtn_two" type="submit" ><img src={ForwardArrow} width="80%"/></button>
               </div>
            </div>
            <div className="EndCreds">
                <ul style={{fontSize:"18px"}}>
                    <li>FAQ's</li>
                    <li>Terms and Conditions</li>
                    <li>Contact us</li>
                    <li>Shop</li>
                </ul>
                <ul style={{fontSize:"18px"}}>
                    <li>Privacy</li>
                    <li>Return</li>
                    <li>Security</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;