import { useState } from 'react';

/**
 * A function which fetches the value corresponding to the key from localStorage.
 * If the item doesn't exist returns the input value.
 *
 * @param {T} value
 * @param {string} key Key for the localStorage.
 * @returns {T} The value fetched from localStorage.
 */
const getItem = <T>(value: T, key: string): T => {
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
 * @param {T} initialValue Initial value of the state.
 * @param {string} key Key for the localStorage.
 * @returns {[T, (value: T | ((val: T) => T)) => void]} Array containing stateful value and updater function.
 */
const useLocalStorage = <T>(
  initialValue: T,
  key: string,
): [T, (value: T | ((val: T) => T)) => void] => {
  const [storedValue, setStoredValue] = useState<T>(getItem(initialValue, key));

  const setValue = (value: T | ((val: T) => T)): void => {
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
