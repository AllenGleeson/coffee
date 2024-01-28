import React from 'react';
import Map from './map';
import { useLoadScript } from '@react-google-maps/api';

const googleMapsApiKey = "";
console.log(googleMapsApiKey);
const About = ({ description, lat, lng }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey,
  });

  if (loadError) return <div>Error loading Google Maps</div>;

  return (
    <section className='row about-section mb-3'>
      <div id='about-us' className='align-items-lg-center col-6 d-flex justify-content-center position-relative slideLeft'>
        <div className='about-left w-50'>
          <article>
            <h3>About Us</h3>
            <hr></hr>
            <p>{description}</p>
            <ul>
              <li>
                <p>
                  <span className='text-bold me-1'>Address:</span><span>123 Mountain Pass, Spain</span>
                </p>
              </li>
              <li>
                <p>
                  <span className='text-bold me-1'>Phone:</span><span>+3531663123</span>
                </p>
              </li>
              <li>
                <p>
                  <span className='text-bold me-1'>Email:</span><span>example@example.com</span>
                </p>
              </li>
            </ul>
          </article>
        </div>
      </div>
      <div id='location' className='col-6 p-0 position-relative slideRight'>
        {isLoaded ? <Map lat={lat} lng={lng} /> : <div>Loading Map...</div>}
      </div>
    </section>
  );
}

export default About;