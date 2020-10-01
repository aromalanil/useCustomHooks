import { useState } from 'react';

/*
 * 
 * Custom useState hook which allow us to get the geolocalitation on your browser
 * 
 */

const useGeolocalisation = (geolocation) => {
  const [latLong, setLatLong] = useState({latitude: 0, longitude: 0});

  // We are calling our navigator element that allow us know the position
  if (navigator.geolocation && geolocation) {
    // if we have permissions we should be able to access to getCurrentPosition method
    navigator.geolocation.getCurrentPosition((position) => {
      // We are creating a new object to save the latitude and longitude
      let userPosition = {};
      // We are accessing to latitude and longitude
      userPosition.latitude = position.coords.latitude; 
      userPosition.longitude = position.coords.longitude;
      setLatLong(userPosition);
    });
  } else {
    console.error("The browser doesn't support geolocalitation")
  }

  return [latLong]
}

export default useGeolocalisation;
