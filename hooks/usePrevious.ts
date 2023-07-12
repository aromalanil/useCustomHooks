import { useEffect, useRef } from 'react';

/**
 * Custom hook to retrieve the previous value of a useState
 *
 * @param {T} value Initial value of the state.
 */
const usePrevious = <T>(value: T): T | undefined => {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef<T>();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;
