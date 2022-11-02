import React from 'react';

/**
 * @typedef {Object} ElementRef
 * @property {myRef} - reference to the DOM element
 * @property {wasClicked} - state
 */

/**
 *
 * Custom hook which return an object with the refence to the DOM element,
 * the state and the setter of the state.
 * @param {boolean} initialValue Initial value of the state.
 * @return {ElementRef} Object containing the coordinates of the mouse pointer.
 */
const useClickOutside = (initialValue) => {
  const [wasClicked, setWasClicked] = React.useState(initialValue);
  const myRef = React.useRef(null);

  const clickOutside = (event) => {
    if (myRef.current && !myRef.current.contains(event.target)) {
      setWasClicked(false);
    }
  };

  React.useEffect(() => {
    // Event listener to track the component activity.
    document.addEventListener('click', clickOutside, true);
    return () => {
      document.removeEventListener('click', clickOutside, true);
    };
  }, []);

  return { myRef, wasClicked };
};

export default useClickOutside;
