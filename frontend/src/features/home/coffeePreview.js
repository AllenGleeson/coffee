import React from 'react'
import Coffees from './coffees'
import CoffeeInfo from './coffeeInfo';
import '../../assets/css/coffeePreview.css'

const CoffeePreview = ({ heading, subheading1, img1, subheading2, img2, subheading3, img3, description }) => {
    return (
        <section className="row sect--type">
            <CoffeeInfo
                heading={heading}
                subheading1={subheading1}
                img1={img1}
                subheading2={subheading2}
                img2={img2}
                subheading3={subheading3}
                img3={img3}
                description={description}
            />
            <Coffees />
        </section>
    );
}

export default CoffeePreview