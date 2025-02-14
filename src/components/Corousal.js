import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../style/Corousal.css';
import imageData from '../utils/imageData.js';
import NextArrow from './NextArrow.js';
import PrevArrow from './PrevArrow.js';

export default function Corousal()
{
    // Pause of hover
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <div className="corousal-div">
        <div className="corousal-main-div">
            <Slider {...settings}>
            {
                imageData.map((value) =>{
                    return(
                        <div>
                            <img className="corousal-img" src={value.img}/>
                        </div>
                    )
                })
            }
            </Slider>
        </div>
        </div>
    );
}
