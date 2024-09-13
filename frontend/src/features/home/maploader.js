import React, { useMemo } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';

const MapLoader = ({ apiKey, children }) => {
  const { isLoaded, loadError } = useJsApiLoader(
    useMemo(() => ({
      id: 'google-map-script',
      googleMapsApiKey: apiKey,
      libraries: ['places'], // Add any libraries you are using
    }), [apiKey])
  );

  if (!apiKey) {
    return <div>API key is not available</div>; // Render this if API key is not provided
  }

  if (loadError) {
    return <div>Error loading Google Maps</div>; // Display error if there's an issue loading the map
  }

  return isLoaded ? children : <div>Loading Map...</div>;
};

export default MapLoader;
