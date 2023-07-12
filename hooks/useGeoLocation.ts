import { useState, useEffect } from 'react';

/**
 * @typedef {Object} GeoLocation
 * @property {number} latitude - Latitude coordinate of the user
 * @property {number} longitude - Longitude coordinate of the user
 */
interface GeoLocation {
  latitude: number;
  longitude: number;
}

/**
 * Hook which lets you get the Geolocation from your browser
 * @returns {GeoLocation | {}} Object containing the latitude and longitude of the user, or an empty object if geolocation is not available.
 */
const useGeoLocation = (): GeoLocation | {} => {
  const [geoLocation, setGeoLocation] = useState<GeoLocation | {}>({});

  // Only called on ComponentDidMount
  useEffect(() => {
    // Checking if device supports geolocation
    if (navigator.geolocation) {
      // If permission is granted we should be able to access to getCurrentPosition method
      navigator.geolocation.getCurrentPosition((position) => {
        // Creating an object to save the latitude and longitude
        const userPosition: GeoLocation = {
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
