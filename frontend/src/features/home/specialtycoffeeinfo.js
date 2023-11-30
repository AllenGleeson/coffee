import React from 'react';
import '../../assets/css/brandvideo.css'

const SpecialtyCoffeeInfo = ({ heading, description }) => {
  return (
    <div className= "col-6 p-0">
      <div className='video-brand'>
        <h2>{heading}</h2>
        <hr></hr>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SpecialtyCoffeeInfo;