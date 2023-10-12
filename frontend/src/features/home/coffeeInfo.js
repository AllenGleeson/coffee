import React from 'react';
import '../../assets/css/coffeeInfo.css'

const CoffeeInfo = ({ subheading, img }) => {
    return (
        <section className="coffeeinfo-section d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-4">
                        <img src={img} className="bestimg" />
                        <h2 className="besttitle">{subheading}</h2>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default CoffeeInfo;