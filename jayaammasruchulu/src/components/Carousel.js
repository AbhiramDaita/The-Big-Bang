import CarouselCard from '../components/CarouselCards';
import React, { useEffect, useState } from 'react';
import RightButton from './RightButton';
const Carousel = () =>{
    var counter = 1;
    const slide = ()=>{
        if(counter < 4 && counter != 0){
            counter++;
            document.getElementById("radio" + counter).checked = true;
   
        }
        else{
            counter = 1;
        }
    }
    const onClick = ()=>{
        console.log(counter);
        if(counter < 4 && counter != 0){
            counter++;
            document.getElementById("radio"+counter).checked = true;
        }
        else{
            counter = 1;
        }
    }
    const oppClick = ()=>{
        if(counter > 0 ){
                counter--;
                document.getElementById("radio"+counter).checked = true;
        }
        else{
            counter = 1;
        }
    }
    useEffect(()=>{
        const interval = setInterval(()=>{
            slide()
        },5000);
        return () => clearInterval(interval)
    })
    
    return(
        <div className="CarouselBox">
                <div className="SliderBtn">
                    <RightButton reversed={true} oppClick={oppClick}/>
                    <RightButton onClick={onClick}/>
                </div>
                <input type="radio"  name="radio-btn" id="radio1" />
                <input type="radio" id="radio2" name="radio-btn" />
                <input type="radio" id="radio3" name="radio-btn"/>
                <input type="radio" id="radio4" name="radio-btn"/>

            <div className="slider first">
                <CarouselCard url="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonLaunchpad/2022/EBD/June/2x_EBD_Hero_1_PC._CB633803451_.jpg"/>
            </div>
            <div className="slider">
                <CarouselCard url="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/SVP/3000x1200_Hero-Tall_NP._CB633575547_.jpg"/>
            </div>
            <div className="slider">
                <CarouselCard  url="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MiniTVPCXbiz/echostandalone12x._CB633549143_.jpg"/>
            </div>
            <div className="slider">
                <CarouselCard url="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonLaunchpad/2022/EBD/June/1x_EBD_Hero_2_PC._CB633808213_.jpg"/>
            </div>
 
            <div className="slideButtons navigation-auto">
                <label for="radio1" class="nav-btn label1"></label>
                <label for="radio2" class="nav-btn label2"></label>
                <label for="radio3" class="nav-btn label3"></label>
                <label for="radio4" class="nav-btn label4"></label>
            </div>
        </div>
    )
}

export default Carousel;