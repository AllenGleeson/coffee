import React, { useMemo } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

import image from '../../assets/images/MapsMarker.webp';

function Map({ lat, lng }) {
  const center = useMemo(() => ({ lat, lng }), [lat, lng]);
  return (
    <GoogleMap zoom={11} center={center} mapContainerClassName="map-container">
      <Marker 
        position={center}
        icon={{
          url: image, // Specify the URL of your custom icon
          scaledSize: new window.google.maps.Size(50, 80), // Adjust the size if necessary
        }}
      />
    </GoogleMap>
  );
}

export default Map;