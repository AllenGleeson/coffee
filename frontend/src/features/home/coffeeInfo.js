import React from 'react';
import '../../assets/css/coffeeInfo.css'

const CoffeeInfo = ({ heading, subheading, img, description }) => {
    return (
        <section className="coffeeInfo-section d-flex justify-content-center align-items-center">
            <div className="container">
                <h1 className="secttitle best--bottom sect--white-text">{heading}</h1>
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-4">
                        <img src={img} className="bestimg" />
                        <h2 className="besttitle">{subheading}</h2>
                    </div>
                </div>
                <p className="sectsubtitle best--margin sect--white-text">{description}</p>
                <a href="#" className="btn btn--top">About us</a>
            </div>
        </section>

    );
}

export default CoffeeInfo;