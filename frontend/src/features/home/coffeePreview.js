import React from 'react'
import Coffees from './coffees'
import CoffeeInfo from './coffeeInfo';
import '../../assets/css/coffeePreview.css'

const CoffeePreview = ({ heading, subheading, img, description }) => {
    return (
        <section className="row sect--type">
            <CoffeeInfo
                heading={heading}
                subheading={subheading}
                img={img}
                description={description}
            />
            <Coffees />
        </section>
    );
}

export default CoffeePreview