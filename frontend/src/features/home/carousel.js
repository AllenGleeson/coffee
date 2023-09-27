import React from 'react';
import { Carousel } from 'react-bootstrap';
import CoffeePreview from './coffeePreview';



const MyCarousel = ({ heading, subheading1, img1, subheading2, img2, subheading3, img3, description }) => {
    return (
        <Carousel interval={null}>
            <Carousel.Item>
                <CoffeePreview
                    heading={heading}
                    subheading1={subheading1}
                    img1={img1}
                    subheading2={subheading2}
                    img2={img2}
                    subheading3={subheading3}
                    img3={img3}
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