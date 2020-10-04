import { useState, useEffect } from 'react';

/**
 * @typedef {Object} GeoLocation
 * @property {number} latitude - Latitude coordinate of the user
 * @property {number} longitude - Longitude coordinate of the user
 */

/**
 * Hook which lets you get the Geolocation from your browser
 * @returns {GeoLocation} Object containing the latitude and longitude of the user.
 */
const useGeoLocation = () => {
  const [geoLocation, setGeoLocation] = useState({});

  // Only called on ComponentDidMount
  useEffect(() => {
    // Checking if device supports geolocation
    if (navigator.geolocation) {
      // If permission is granted we should be able to access to getCurrentPosition method
      navigator.geolocation.getCurrentPosition((position) => {
        // Creating an object to save the latitude and longitude
        const userPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        setGeoLocation(userPosition);
      });
    } else {
      throw new Error('The browser does not support geolocation');
    }
  }, []);

  return geoLocation;
};

export default useGeoLocation;
