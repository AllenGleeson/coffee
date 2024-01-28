import React, { useEffect } from 'react';

function ParallaxHeader() {
  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      const parallaxBackground = document.querySelector(".parallax-background");
      if (parallaxBackground) {
        const scrollY = window.scrollY;
        parallaxBackground.style.transform = `translateY(-${scrollY * 0.4}px)`; // Corrected string interpolation
      }
    };

    // Add an event listener for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div class="parallax-container">
      <div class="parallax-background"></div>
    </div>
  );
}

export default ParallaxHeader;