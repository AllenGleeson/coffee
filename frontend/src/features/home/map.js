import React, { useMemo, useState } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

function Map({ lat, lng }) {
  const [markerInfo, setMarkerInfo] = useState(null);

  const center = useMemo(() => ({ lat, lng }), [lat, lng]);

  const handleMarkerClick = () => {
    // Set the marker info when clicked
    setMarkerInfo("This is the marker's tooltip text.");
  };

  const handleMarkerClose = () => {
    // Close the marker info when closed
    setMarkerInfo(null);
  };

  return (
    <GoogleMap zoom={14} center={center} mapContainerClassName="map-container">
      <Marker position={center} onClick={handleMarkerClick} />

      {markerInfo && (
        <InfoWindow position={center} onCloseClick={handleMarkerClose}>
          <div>{markerInfo}</div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

export default Map;