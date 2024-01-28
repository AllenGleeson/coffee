import React from 'react';
import MyCarousel from './carousel';

const Jumbotron = ({ heading, subheading }) => {
  return (
    <section class="jumbotron">
      <MyCarousel />
      <div class="caption">
        <h2>{heading}</h2>
        <p>{subheading}</p>
      </div>
    </section>
  );
};

export default Jumbotron;