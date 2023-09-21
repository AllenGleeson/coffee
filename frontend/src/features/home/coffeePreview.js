import React from 'react'
import Coffees from './coffees'
import CoffeeInfo from './coffeeInfo';
import '../../assets/css/coffeePreview.css'

const CoffeePreview = () => {
    return (
        <section className="row sect--type">
            <CoffeeInfo />
            <Coffees />
        </section>
    );
}


export default CoffeePreview