// InstagramFeed component
import React, { useEffect } from 'react';
import Instafeed from 'instafeed.js';
import '../../assets/css/instafeed.css'; // Import the CSS file
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
    // Initialize Instafeed with your access token and other options
    const feed = new Instafeed({
      accessToken: 'IGQWROTzJ0UDN6S1RXNnhmVUNxWThqOW1fQW1HX09RbFlUMkFrTGZAvN2oyaUp2WFRZAWHVNYVNCQmRyT3BKRlZAxUTdEaXJ0aE8tWkZAEcTFGdjFVSHc5NG9TZAmlDWmJwNktHYVlKVVpYbXJ6MnMxR29SZAE4yZAFJ2ZA0EZD', // Replace with your Instagram access token
      limit: 4, // The number of posts to display
      target: 'instafeed', // The ID of the element where you want to display the Instagram feed
      template: template, // Customize the template as needed
      get: 'user', // Use 'user' to avoid duplicates
    });

    // Run Instafeed to fetch and display Instagram posts
    feed.run();
  }, []);

  return (
    <div id="instafeed"></div>
  );
}

export default InstagramFeed;