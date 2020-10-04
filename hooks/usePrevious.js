import { useEffect, useRef } from 'react';

/**
 * Custom hook to retrieve the previous value of a useState
 *
 * @param {*} value Initial value of the state.
 */
const usePrevious = (value) => {
    const ref = useRef();
    
    useEffect(() => {
      ref.current = value;
    }, [value]);

    return ref.current;
}

export default usePrevious;