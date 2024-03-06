import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../assets/images/CoffeeBackground-1.png';
import image2 from '../../assets/images/CoffeeBackground-2.png';
import image3 from '../../assets/images/CoffeeBackground-3.png';


const MyCarousel = () => {
    return (
        <Carousel interval={null}>
            <Carousel.Item>
                <img src={image1} />
            </Carousel.Item>
            <Carousel.Item>
                <img src={image2} />
            </Carousel.Item>
            <Carousel.Item>
                <img src={image3} />
            </Carousel.Item>
        </Carousel>
    );
};

export default MyCarousel;