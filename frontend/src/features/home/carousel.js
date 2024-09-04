import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../assets/images/CoffeeBackground-Home-1.webp';
import image2 from '../../assets/images/CoffeeBackground-Home-2.webp';
import image3 from '../../assets/images/CoffeeBackground-Home-3.webp';

const MyCarousel = () => {
    return (
        <Carousel interval={4000}>
            <Carousel.Item>
                <img src={image1} alt='Cafe Background One' />
            </Carousel.Item>
            <Carousel.Item>
                <img src={image2} alt='Cafe Background Two' />
            </Carousel.Item>
            <Carousel.Item>
                <img src={image3} alt='Cafe Background Three' />
            </Carousel.Item>
        </Carousel>
    );
};

export default MyCarousel;