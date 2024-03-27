import React from 'react';
import '../../assets/css/brandvideo.css'

const SpecialtyCoffeeInfo = ({ heading, description }) => {
  return (
    <div className= "col-sm-12 col-md-12 col-lg-6 pe-0 bg-grey">
      <div className='brand-video'>
        <h2>{heading}</h2>
        <hr></hr>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SpecialtyCoffeeInfo;