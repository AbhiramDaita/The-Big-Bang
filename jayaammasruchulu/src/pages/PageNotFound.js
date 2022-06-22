import React from 'react'

import PineTree from '../images/PineTree.svg';

import SecondaryButton from '../components/SecondaryButton';
export default function PageNotFound() {
  return (
    <div style={{fontFamily:"Itim"}}>
 
      <img src={PineTree} />
      <h1 style={{fontSize:"50px",margin:"0px"}}>404</h1>
      <p style={{color:"darkgray",marginBottom:"25px",marginTop:"0px"}}>Page Not Found</p>
      <SecondaryButton title="Home"/>
    </div>
  )
}
