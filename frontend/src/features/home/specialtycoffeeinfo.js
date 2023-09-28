import React from 'react';

const SpecialtyCoffeeInfo = ({ heading, description }) => {
  return (
    <div className= "col-6">
      <h2>{heading}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SpecialtyCoffeeInfo;