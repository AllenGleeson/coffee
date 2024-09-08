import React, { useEffect } from 'react';
import Instafeed from 'instafeed.js';
import '../../assets/css/instafeed.css';
import instagramIcon from '../../../src/assets/images/instagram-icon.webp';

function InstagramFeed({apiKey}) {
  const template = `
    <div class="image-container">
      <a href="{{link}}" target="_blank">
        <img class="instagram-image" src="{{image}}" alt="{{caption}}" />
        <div class="overlay">
        </div>
        <img class="instagram-icon" src="${instagramIcon}" alt="Instagram Icon" />
      </a>
    </div>
  `;

  useEffect(() => {
    if (!apiKey) {
      // If apiKey is not defined, don't proceed
      console.error('Instagram API key is missing.');
      return;
    }
    const feed = new Instafeed({
      accessToken: apiKey,
      limit: 4, // The number of posts to display
      target: 'instafeed', // The ID of the element where you want to display the Instagram feed
      template: template, // Customize the template as needed
      get: 'user', // Use 'user' to avoid duplicates
    });

    feed.run();
  }, [apiKey, template]);

  return (
    <section className='instagram-section'>
      <div id="instafeed"></div>
    </section>
  );
}

export default InstagramFeed;