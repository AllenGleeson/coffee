import React, { useEffect } from 'react';
import Instafeed from 'instafeed.js';

function InstagramFeed() {
    const template = `
        <a href="{{link}}">
            <img src="{{image}}" alt="{{caption}}" />
        </a>
        <p>{{caption}}</p>
    `;

    useEffect(() => {
        // Initialize Instafeed with your access token and other options
        const feed = new Instafeed({
            accessToken: '', // Replace with your Instagram access token
            limit: 1, // The number of posts to display
            target: 'instafeed', // The ID of the element where you want to display the Instagram feed
            template: template, // Customize the template as needed
            get: 'user', // Use 'user' to avoid duplicates
        });
        console.log(feed)
        // Run Instafeed to fetch and display Instagram posts
        feed.run();
    }, []);

    return (
        <div>
            <h2>Instagram Feed</h2>
            <div id="instafeed"></div>
        </div>
    );
}

export default InstagramFeed;
