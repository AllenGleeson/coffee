import React from 'react'
import Coffees from './coffees'
import CoffeeInfo from './coffeeInfo';
import '../../assets/css/coffeePreview.css'

const CoffeePreview = ({ heading, description, nodes }) => {
    return (
        <section className="coffees-temp">
            <section className="row sect--type">
                <div className='coffeeNodesSection col-lg-6 col-md-12 col-sm-12'>
                    <h1 className="secttitle best--bottom sect--white-text">{heading}</h1>
                    <div className="coffeeNodes&Desc">
                        <div className="coffeeNodes">
                            <div className='row'>
                                {nodes && nodes.map((coffee, index) => (
                                    <CoffeeInfo key={index}
                                        subheading={coffee.subheading}
                                        img={coffee.img}
                                    />
                                ))}
                            </div>
                        </div>
                        <p className="sectsubtitle best--margin sect--white-text">{description}</p>
                    </div>
                </div>
                <Coffees />
            </section>
        </section>
    );
}

export default CoffeePreview