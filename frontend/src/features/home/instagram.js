// InstagramFeed component
import React, { useEffect } from 'react';
import Instafeed from 'instafeed.js';
import '../../assets/css/instafeed.css'; // Import the CSS file
import image from '../../../src/assets/images/instagram-icon.png';

function InstagramFeed() {
  const template = `
    <a href="{{link}}" target="_blank">
      <img src="{{image}}" alt="{{caption}}" />
      <img
        className="instagram-icon"
        src="${image}"
        alt="Instagram Icon"
      />
    </a>
  `;

  useEffect(() => {
    // Initialize Instafeed with your access token and other options
    const feed = new Instafeed({
      accessToken: 'IGQWROVHlwNFB6TUlXYzZARUDMyZAGEzMzhDYV9KWGVpZATV0R3cxaWpYQzFDZAXMxOUF3SmNSYU5pUmxsMFIyZAHRfRG0yeUVmQ2FSeHJadXltbVpsUzBhLV9WUXYyTWdaTnJURzBlaVktejRub3RUUC0xVHhGWFd0QzAZD', // Replace with your Instagram access token
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