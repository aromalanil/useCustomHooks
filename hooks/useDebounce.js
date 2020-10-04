import { useCallback } from 'react';

/**
 * Debounce function generator.
 * @param {function} inputFunction Function which is to be modified.
 * @param {number} delay The time delay in milliseconds.
 * @returns {function} The modified function.
 */
function debounce(inputFunction, delay) {
  let timeout;
  return (...args) => {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      inputFunction.apply(context, args);
    }, delay);
  };
}

/**
 * Custom hook which returns a function which is forced
 * to wait a certain amount of time before running again.
 *
 * @param {function} inputFunction Function which is to be modified.
 * @param {number} delay The time delay in milliseconds.
 * @returns {function} The modified function.
 */
const useDebounce = (inputFunction, delay) => useCallback(debounce(inputFunction, delay), []);

export default useDebounce;
