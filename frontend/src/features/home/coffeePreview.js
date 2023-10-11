import React from 'react'
import Coffees from './coffees'
import CoffeeInfo from './coffeeInfo';
import '../../assets/css/coffeePreview.css'

const CoffeePreview = ({ heading, description, nodes }) => {
    return (
        <section className="row sect--type">
            <div className='col-7'>
                <h1 className="secttitle best--bottom sect--white-text">{heading}</h1>
                {nodes && nodes.map((coffee, index) => (
                    <div key={index} className='row'>
                        <CoffeeInfo
                            subheading={coffee.subheading}
                            img={coffee.img}
                        />
                    </div>
                ))}
                <p className="sectsubtitle best--margin sect--white-text">{description}</p>
            </div>
            <Coffees />
        </section>
    );
}

export default CoffeePreview