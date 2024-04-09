import React, { useRef, useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

import image from "../img/bike.png";

const containerStyle = {
  width: "50%",
  height: "400px",
  position: "relative",
  borderRadius: 25,
  boxShadow: "0 10px 8px rgba(0, 0, 0, 0.3)",
  left: 100,
};

const inputStyle = {
  boxSizing: "border-box",
  border: "1px solid transparent",
  width: "300px",
  height: "35px",
  padding: "0 12px",
  borderRadius: "3px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
  fontSize: "14px",
  outline: "none",
  textOverflow: "ellipses",
  position: "absolute",
  top: "21%",
  left: "34%",
  transform: "translate(-50%, -50%)",
  zIndex: 999,
};

const MapRoute = () => {
  const mapRef = useRef(null);
  const autocomplete = useRef(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [directions, setDirections] = useState(null);
  const [mapZoom, setMapZoom] = useState(18);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setMarkerPosition(currentLocation);
        setMapZoom(18);
      },
      (error) => {
        console.error("Error getting current location:", error);
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  const onLoadAutocomplete = (autocompleteInstance) => {
    autocomplete.current = autocompleteInstance;
  };

  const onPlaceChanged = () => {
    if (autocomplete.current) {
      const place = autocomplete.current.getPlace();
      if (place && place.geometry) {
        const destination = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        setMarkerPosition(origin);
        setMapZoom(18);
        calculateDirections(destination);
      }
    }
  };

  const calculateDirections = (destination) => {
    const origin = markerPosition;
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: "DRIVING",
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
        } else {
          console.error("Directions request failed due to ", status);
        }
      }
    );
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDfVQzBHlXDkSgvLZUHHbutEh5Y5WmlHPA"
      libraries={["places"]}
    >
      <Autocomplete onLoad={onLoadAutocomplete} onPlaceChanged={onPlaceChanged}>
        <input type="text" placeholder="Enter a location" style={inputStyle} />
      </Autocomplete>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={
          markerPosition || { lat: 8.358450837960632, lng: 80.50375376609703 }
        }
        zoom={mapZoom}
      >
        {markerPosition && (
          <Marker
            position={markerPosition}
            icon={{
              url: image,
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
        )}
        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              polylineOptions: {
                strokeColor: "008c9f",
                strokeOpacity: 0.7,
                strokeWeight: 5,
              },
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapRoute;
