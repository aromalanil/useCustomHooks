import { useCallback } from 'react';

/**
 * Debounce function generator.
 * @param {function} inputFunction Function which is to be modified.
 * @param {number} delay The time delay in milliseconds.
 * @returns {function} The modified function.
 */
function debounce<F extends (...args: any[]) => any>(inputFunction: F, delay: number): (...args: Parameters<F>) => void {
  let timeout: number | null;
  return (...args: Parameters<F>) => {
    if (timeout) clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      timeout = null;
      inputFunction(...args);
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
const useDebounce = <F extends (...args: any[]) => any>(inputFunction: F, delay: number) => useCallback(debounce(inputFunction, delay), [inputFunction, delay]);

export default useDebounce;
