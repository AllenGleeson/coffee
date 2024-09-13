import React, { useMemo } from 'react';
import Map from './map';
import MapLoader from './maploader';

const About = ({ description, address, phone, email, lat, lng, apiKey }) => {
  // Memoize the MapLoader component to avoid re-rendering with different options
  const mapLoader = useMemo(() => {
    if (apiKey) {
      return (
        <MapLoader key={apiKey} apiKey={apiKey}>
          <Map lat={lat} lng={lng} />
        </MapLoader>
      );
    } else {
      return <div>API key is not available</div>;
    }
  }, [apiKey, lat, lng]);

  return (
    <section className='row about-us-section mb-3'>
      <div id='about-us' className='align-items-lg-center col-sm-12 col-md-6 d-flex justify-content-center position-relative'>
        <div className='about-left'>
          <article>
            <h3>About Us</h3>
            <hr />
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
        {mapLoader}
      </div>
    </section>
  );
};

export default About;
