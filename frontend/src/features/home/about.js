import React from 'react';
import Map from './map';
import { useLoadScript } from '@react-google-maps/api';

const About = ({ description, address, phone, email, lat, lng }) => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  if (loadError) return <div>Error loading Google Maps</div>;

  return (
    <section className='row about-us-section mb-3'>
      <div id='about-us' className='align-items-lg-center col-sm-12 col-md-6 d-flex justify-content-center position-relative'>
        <div className='about-left'>
          <article>
            <h3>About Us</h3>
            <hr></hr>
            <div className='about-us-description'>
              <p>{description}</p>
              <ul>
                <li>
                  <p>
                    <span className='text-bold me-1'>Address:</span><span>{address}</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className='text-bold me-1'>Phone:</span><span>{phone}</span>
                  </p>
                </li>
                <li>
                  <p>
                    <span className='text-bold me-1'>Email:</span><span>{email}</span>
                  </p>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
      <div id='location' className='col-sm-12 col-md-6 p-0 position-relative'>
        {isLoaded ? <Map lat={lat} lng={lng} /> : <div>Loading Map...</div>}
      </div>
    </section>
  );
}

export default About;