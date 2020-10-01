import { useState } from 'react';

/** 
 * Hook which allow us to get the geolocalisation from your browser
 * @param {boolean} geolocation it is a boolean that request for browser permitions.
 * @returns {Object} Object contains an object with the latitude and longitude.
 */
const useGeolocalisation = (geolocation) => {
  const [latLong, setLatLong] = useState({latitude: 0, longitude: 0});
  const [errorMessage, setErrorMessage] = useState({error: "The browser doesn't support geolocalitation"});
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
    return [errorMessage]
  }
  return [latLong]
}

export default useGeolocalisation;
