import React, { useEffect, useRef } from 'react';
import Vimeo from '@vimeo/player';

const VimeoPlayer = ({ videoId }) => {
  const playerRef = useRef(null);

  // Set the data-vimeo-id attribute based on the videoId prop
  useEffect(() => {
    if (playerRef.current && videoId) {
      playerRef.current.setAttribute('data-vimeo-id', videoId);
    }
  }, [videoId]);

  useEffect(() => {
    let player;

    try {
      // Check if videoId is defined before creating the player instance
      if (videoId) {
        // Attempt to create a new Vimeo player instance
        player = new Vimeo(playerRef.current, {
          autoplay: true,
          loop: true,
          muted: true,
          controls: false,
          title: false,
          maxWidth: 100, // Set the maximum width
          maxHeight: 100,
        });
      }
    } catch (error) {
      // Do nothing with the error, just catch it to suppress the error message
    }

    // Cleanup when the component unmounts
    return () => {
      // Ensure player is defined before calling destroy
      if (player) {
        player.destroy();
      }
    };
  }, [videoId]);

  return (
    <div className="col-sm-12 col-md-12 col-lg-6 p-0 overflow-hidden">
      <div className='vim-container'>
        <div id="videoplayer" ref={playerRef}/>
      </div>
    </div>
  )
};

export default VimeoPlayer;
