import { useState } from 'react';

/** 
 * Hook which allow us to get the geolocalisation from your browser
 * @returns {Object} Object contains an object with the latitude and longitude.
 */
const useGeoLocation = () => {
  const [geoLocation, setGeoLocation] = useState({latitude: 0, longitude: 0});
  // We are calling our navigator element that allow us know the position
  if (navigator.geolocation) {
    // if we have permissions we should be able to access to getCurrentPosition method
    navigator.geolocation.getCurrentPosition((position) => {
      // We are creating a new object to save the latitude and longitude
      let userPosition = {
        latitude = position.coords.latitude,
        longitude = position.coords.longitude,
      };
      setGeoLocation(userPosition);
    });
  } else {
    throw "The browser doesn't support geolocalitation";
  }
  return geoLocation
}

export default useGeoLocation;
