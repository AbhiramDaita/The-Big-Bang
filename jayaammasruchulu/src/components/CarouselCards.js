import React from 'react';

const CarouselCards = ({url})=>{
    return(
        <div className="CarouselCardBox">
            <div className="CarouselCardImage">
                <img src={url} width="1200px" height="450px"/>
            </div>
        </div>
    )
}

export default CarouselCards;