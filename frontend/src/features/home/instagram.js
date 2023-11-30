import React, { useEffect } from 'react';
import Instafeed from 'instafeed.js';
import '../../assets/css/instafeed.css'

function InstagramFeed() {
    const template = `
        <a href="{{link}}" target="_blank">
            <img src="{{image}}" alt="{{caption}}" />
        </a>
    `;

    useEffect(() => {
        // Initialize Instafeed with your access token and other options
        const feed = new Instafeed({
            accessToken: 'IGQWRPVlZA5X2YwSVVYM21qcHdRdENZAMk5nSGFhMEZAjM1Y1ZA1VyMVJLUlJMZAG9RWTRydElhTjh4ajlISGN2SFllSlpBdFVPd3lLMHU0UUUtQTRMTEVkV2E2b1FwNy1icVRDVm0yUmFzMFEtVEZAkWFZArNDFQTDZASQWsZD', // Replace with your Instagram access token
            limit: 4, // The number of posts to display
            target: 'instafeed', // The ID of the element where you want to display the Instagram feed
            template: template, // Customize the template as needed
            get: 'user', // Use 'user' to avoid duplicates
        });

        // Run Instafeed to fetch and display Instagram posts
        feed.run();
    }, []);

    return (
        <div>
            <div id="instafeed"></div>
        </div>
    );
}

export default InstagramFeed;