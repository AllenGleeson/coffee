import React from 'react';
import { Carousel } from 'react-bootstrap';
import myImage from '../../assets/temp.webp';


const MyCarousel = () => {
    return (
        <Carousel interval={null}>
            <Carousel.Item>
                <img src={myImage} />
            </Carousel.Item>
            <Carousel.Item>
                <img src={myImage} />
            </Carousel.Item>
            <Carousel.Item>
                <img src={myImage} />
            </Carousel.Item>
        </Carousel>
    );
};

export default MyCarousel;