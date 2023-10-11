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

  return <div id="videoplayer" className="col-6" ref={playerRef} />;
};

export default VimeoPlayer;