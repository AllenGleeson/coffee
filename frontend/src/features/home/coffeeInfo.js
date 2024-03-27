import React from 'react';
import '../../assets/css/coffeeInfo.css'

const CoffeeInfo = ({ subheading, img }) => {
    return (
        <div className="col-4">
            <img src={img} className="bestimg" />
            <h2 className="besttitle">{subheading}</h2>
        </div>
    );
}

export default CoffeeInfo;