import React from 'react';
import temp from '../../assets/temp.webp';
import MyCarousel from './carousel';

const Jumbotron = ({ heading, subheading }) => {
  return (
    <section className="jumbotron">
      <MyCarousel />
      <div className="caption">
        <h2>{heading}</h2>
        <p>{subheading}</p>
      </div>
    </section>
  );
};

export default Jumbotron;