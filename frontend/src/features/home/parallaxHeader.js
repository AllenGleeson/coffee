import React, { useEffect } from 'react';

function ParallaxHeader({ heading, subheading }) {
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
    <div className="parallax-container">
      <div className="parallax-background"></div>
      <div className="parallax-content">
        <h1>{heading}</h1>
        <p>{subheading}</p>
      </div>
    </div>
  );
}

export default ParallaxHeader;