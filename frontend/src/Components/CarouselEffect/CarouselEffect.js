import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import camera from "../Bannerimg/camera.png";
import phone from "../Bannerimg/phone.png";
import tv from "../Bannerimg/tv.png"
import ref from "../Bannerimg/ref.png";

const CarouselEffect = () => {
    return (
        <div className='carousel-container'>
            <div className='carousel-image'>
                <Carousel autoPlay={true} showArrows={false} infiniteLoop={true} showThumbs={false} >
                    <div>
                        <img src={camera} alt='Camera' />
                    </div>
                    <div>
                        <img src={phone} alt='Phone' />
                    </div>
                    <div>
                        <img src={tv} alt='Television' />
                    </div>
                    <div>
                        <img src={ref} alt='Refrigerator' />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default CarouselEffect;

