import React from 'react';
import MyCarousel from './carousel';

const Jumbotron = ({ heading, subheading }) => {
  return (
    <section className="jumbotron-section">
      <MyCarousel />
      <div className="caption">
        <h2 className='text-center'>{heading}</h2>
        <p>{subheading}</p>
      </div>
    </section>
  );
};

export default Jumbotron;