import React from 'react';
import Slider from "react-slick";
import BannerOne from '../../Images/banner (1).jpg'
import BannerTwo from '../../Images/banner (2).jpg'
import BannerThree from '../../Images/banner (3).jpg'

const Banner = () => {
    var settings = {
       
    items:1,
    smartSpeed:600,
    autoplay: true,
    loop: true,
    nav:false,
   dots:false,
   fade: true,
  cssEase: 'linear'
      };
    return (
        <section  className="banner m-0 p-0">

            <Slider  className="banner-carousel" {...settings}>
                <div className="banner-image"><img className="w-100" src={BannerOne} alt=""/></div>
                <div className="banner-image"><img className="w-100" src={BannerTwo} alt=""/></div>
                <div className="banner-image"><img className="w-100" src={BannerThree} alt=""/></div>
             </Slider>
            
            <div className="banner-content ">
                <div className="banner-heading">
                        <h1>Start Your Business </h1>
                    <h2>We Completed</h2>
                    <h2><span>485+</span> Projects</h2>  
                </div>             
            </div>
        </section>
    );
};

export default Banner;