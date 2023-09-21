import React from 'react';
import { Carousel } from 'react-bootstrap';
import CoffeePreview from './coffeePreview';



const MyCarousel = () => {
    return (
            <Carousel interval={null}>
                <Carousel.Item>
                    <CoffeePreview />
                </Carousel.Item>
                <Carousel.Item>
                    <CoffeePreview />
                </Carousel.Item>
                <Carousel.Item>
                    <CoffeePreview />
                </Carousel.Item>
            </Carousel>
    );
};



export default MyCarousel;