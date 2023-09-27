import React from 'react';
import temp from '../../assets/temp.webp';

const Jumbotron = ({ heading, subheading }) => {
  return (
    <section className="jumbotron">
      <div className="cafe-image">
        <img src={temp} alt="Cafe Interior" />
      </div>
      <div className="caption">
        <h2>{heading}</h2>
        <p>{subheading}</p>
      </div>
    </section>
  );
};

export default Jumbotron;