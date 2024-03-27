import React, { useMemo } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

function Map({ lat, lng }) {
  const center = useMemo(() => ({ lat, lng }), [lat, lng]);
  return (
    <GoogleMap zoom={14} center={center} mapContainerClassName="map-container">
      <Marker 
        position={center}
        icon={{
          url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png', // Specify the URL of your custom icon
          scaledSize: new window.google.maps.Size(40, 40), // Adjust the size if necessary
        }}
      />
    </GoogleMap>
  );
}

export default Map;