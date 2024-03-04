import React, { useEffect } from 'react';
import Instafeed from 'instafeed.js';
import '../../assets/css/instafeed.css';
import instagramIcon from '../../../src/assets/images/instagram-icon.png'; // Import the Instagram icon image


function InstagramFeed() {
  const template = `
    <div class="image-container">
        <a href="{{link}}" target="_blank">
            <img class="instagram-image" src="{{image}}" alt="{{caption}}" />
            <div class="overlay">
            <img
                class="instagram-icon"
                src="${instagramIcon}"
                alt="Instagram Icon"
            />
            </div>
        </a>
    </div>
  `;

  useEffect(() => {
    const feed = new Instafeed({
      accessToken: 'INSERT_TOKEN_HERE',
      limit: 4,
      target: 'instafeed',
      template: template,
      get: 'user',
    });

    feed.run();
  }, []);

  return (
    <section className='instagram-section'>
      <div id="instafeed"></div>
    </section>
  );
}

export default InstagramFeed;