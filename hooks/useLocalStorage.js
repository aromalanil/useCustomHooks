import { useState } from 'react';

/**
 * A function which fetches the value corresponding to the key from localStorage.
 * If the item doesn't exist returns the input value.
 *
 * @param {*} value
 * @param {string} key Key for the localStorage.
 * @returns {*} The value fetched from localStorage.
 */
const getItem = (value, key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : value;
  } catch (error) {
    // If something went wrong returns the value itself.
    return value;
  }
};

/**
 * Custom useState hook which saves the state value in localStorage
 *
 * @param {*} initialValue Initial value of the state.
 * @param {string} key Key for the localStorage.
 * @returns {Array} Array containing stateful value and updater function.
 */
const useLocalStorage = (initialValue, key) => {
  const [storedValue, setStoredValue] = useState(getItem(initialValue, key));

  const setValue = (value) => {
    if (typeof localStorage !== 'undefined') {
      // If value passed is a function, evaluating the function.
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      // Setting state and saving the value to localStorage.
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } else {
      throw new Error('localStorage does not exist');
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
