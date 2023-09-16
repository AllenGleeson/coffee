import React, { useEffect, useRef } from 'react';
import Vimeo from '@vimeo/player';

const VimeoPlayer = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    // Create a new Vimeo player instance
    const player = new Vimeo(playerRef.current, {
      id: videoId,
      autoplay: true, // Autoplay the video
      loop: true,     // Disable looping (optional)
      muted: true,    // Unmute the video (optional)
      controls: false, // Hide player controls (optional)
      title: false,    // Hide video title (optional)
    });

    // Cleanup when the component unmounts
    return () => {
      player.destroy();
    };
  }, [videoId]);

  return <div id="videoplayer" className= "col-6" ref={playerRef}/>;
};

export default VimeoPlayer;





// import React, { useEffect } from 'react';

// const YouTubeAutoplayVideo = ({ videoId }) => {
//   useEffect(() => {
//     // Replace with your YouTube API key (you need one for the Iframe API)
//     const apiKey = 'AIzaSyCN2FSK2BlGwhGKYEJq3rz6e8HULlxIUv4';

//     // Create a script element to load the YouTube Iframe API
//     const script = document.createElement('script');
//     script.src = 'https://www.youtube.com/iframe_api';

//     // Define a callback function to handle API initialization
//     window.onYouTubeIframeAPIReady = () => {
//       // Create the YouTube player
//       new window.YT.Player('youtube-player', {
//         videoId: videoId,
//         playerVars: {
//           autoplay: 1, // Autoplay the video
//           mute: 1,      // Mute the video (autoplay requires mute in some cases)
//           controls: 0,  // Hide player controls
//           showinfo: 0,  // Hide video title
//           rel: 0,              // Prevent related videos
//           modestbranding: 1,   // Reduce branding and overlay elements
//         },
//       });
//     };

//     // Load the script
//     document.body.appendChild(script);

//     // Clean up the callback function on unmount
//     return () => {
//       delete window.onYouTubeIframeAPIReady;
//     };
//   }, [videoId]);

//   return <div id="youtube-player" />;
// };

// export default YouTubeAutoplayVideo;