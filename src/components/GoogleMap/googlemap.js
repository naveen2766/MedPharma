import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 7.2905715,
  lng: 80.6337262,
};

const SimpleGoogleMap = (props) => {
  const { hideMap } = props;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDRwFaguiz0dhJZpUHCMCve-NaenHtH4jw",
    libraries,
  });

  if (loadError) {
    return <div>Error loading Maps</div>;
  }
  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  console.log(isLoaded);

  return (
    <div className={`${hideMap}`}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default SimpleGoogleMap;
