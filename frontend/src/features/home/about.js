import React from 'react';
import Map from './map';
import { useLoadScript } from '@react-google-maps/api';

const googleMapsApiKey="";
console.log(googleMapsApiKey);
const About = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey,
  });

  if (loadError) return <div>Error loading Google Maps</div>;

  return (
    <section className='row about-section mb-3'>
      <div id='about-us' className='col-6 position-relative slideLeft'>
        <div className='about-left h-75 position-absolute w-75'>
          <article className='position-absolute w-50'>
            <h3>About Us</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer.
            </p>
          </article>
        </div>
      </div>
      <div id='location' className='col-6 position-relative slideRight'>
        {isLoaded ? <Map /> : <div>Loading Map...</div>}
      </div>
    </section>
  );
}

export default About;
