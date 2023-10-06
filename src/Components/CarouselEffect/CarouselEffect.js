import React from 'react';
import classes from './CarouselEffect.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import camera from "../Bannerimg/camera.png";
import phone from "../Bannerimg/phone.png";
import tv from "../Bannerimg/tv.png"
import ref from "../Bannerimg/ref.png";


const CarouselEffect = () => {
    return (
        <Carousel className={classes.container} autoPlay={true} showArrows={false} infiniteLoop={true} showThumbs={false} >
            <div>
                <img src={camera}/>
            </div>
            <div>
                <img src={phone}/>
            </div>
            <div>
                <img src={tv} />
            </div>
            <div>
                <img src={ref} />
            </div>
        </Carousel>
    )
}

export default CarouselEffect
