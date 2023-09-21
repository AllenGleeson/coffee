import React from 'react'
import Coffees from './coffees'
import CoffeeInfo from './coffeeInfo';


const CoffeePreview = () => {
    return (
        <section className="row">
            <Coffees />
            <CoffeeInfo />
        </section>
    );
}


export default CoffeePreview