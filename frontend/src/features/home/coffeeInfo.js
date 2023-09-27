import React from 'react';
import '../../assets/css/coffeeInfo.css'

const CoffeeInfo = ({ heading, subheading1, img1, subheading2, img2, subheading3, img3, description }) => {
    return (
        <section className="coffeeInfo-section col-7 d-flex justify-content-center align-items-center">
            <div className="container">
                <h1 className="secttitle best--bottom sect--white-text">{heading}</h1>
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-4">
                        <img src={img1} className="bestimg" />
                        <h2 className="besttitle">{subheading1}</h2>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-4">
                        <img src={img2} className="bestimg" />
                        <h2 className="besttitle">{subheading2}</h2>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-4">
                        <img src={img3} className="bestimg" />
                        <h2 className="besttitle">{subheading3}</h2>
                    </div>
                </div>
                <p className="sectsubtitle best--margin sect--white-text">{description}</p>
                <a href="#" className="btn btn--top">About us</a>
            </div>
        </section>

    );
}

export default CoffeeInfo;