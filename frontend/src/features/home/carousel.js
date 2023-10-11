import React from 'react';
import { Carousel } from 'react-bootstrap';
import CoffeePreview from './coffeePreview';



const MyCarousel = ({ heading, subheading, img, description }) => {
    return (
        <Carousel interval={null}>
            <Carousel.Item>
                <CoffeePreview
                    heading={heading}
                    subheading={subheading}
                    img={img}
                    description={description}
                />
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