import { useEffect, useState } from 'react';

/**
 * Custom useState hook which saves the state value in localStorage
 * @returns {Array} Array containing latitude, longitude, and errorMessage.
 */

export default () => {
  // sets the state if each longitude and latitude since an object is useState is not ideal
  const [latitude, setLat] = useState(null);
  const [longitude, setLong] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  // this pops up a interface where user can accept to share his location or not
  // in case user rejects to share location errorMessage will be populated with
  // appropriate error message
  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.latitude);
    },
    (err) => {
      setErrorMessage(err.message);
    }
  );
  // finally returning an array of all values
  return [latitude, longitude, errorMessage];
};
