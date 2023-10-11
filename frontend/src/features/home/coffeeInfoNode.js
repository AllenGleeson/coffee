import React from 'react';
import '../../assets/css/coffeeinfo.css'

const CoffeeInfoNode = ({ description }) => {
    return (
        <div>
            <p className="sectsubtitle best--margin sect--white-text">{description}</p>
        </div>
    );
}

export default CoffeeInfoNode;