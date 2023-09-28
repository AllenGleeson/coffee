import React from 'react'
import Coffees from './coffees'
import CoffeeInfo from './coffeeInfo';
import '../../assets/css/coffeePreview.css'

const CoffeePreview = ({ coffeedata }) => {
    console.log("coffeedata: ",coffeedata)
    return (
        <section className="row sect--type">
            <div className='col-7'>
                {coffeedata && coffeedata.map((coffee, index) => (
                <div key={index} className='row'>
                    <CoffeeInfo
                        heading={coffee.heading}
                        subheading={coffee.subheading}
                        img={coffee.img}
                    />
                </div>
                ))}
            </div>
            <Coffees />
        </section>
    );
}

export default CoffeePreview