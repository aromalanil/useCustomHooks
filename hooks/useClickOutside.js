import React from "react";

/**
 * @typedef {Object} ElementRef
 * @property {myRef} - reference to the DOM element
 * @property {wasClicked} - state
 * @property {setWasClicked} - setter of the state
 */

/**
 *
 * Custom hook which return an object with the refence to the DOM element,
 * the state and the setter of the state.
 * @param {boolean} initialValue Initial value of the state.
 * @return {ElementRef} Object containing the ref of the DOM element, the click state and its setter.
 */
const useClickOutside = () => {
  const [wasClicked, setWasClicked] = React.useState(false);
  const myRef = React.useRef(null);

  const clickOutside = (event) => {
    if (myRef.current && !myRef.current.contains(event.target)) {
      setWasClicked(true);
    }
  };

  React.useEffect(() => {
    // Event listener to track the component activity.
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, []);

  return { myRef, wasClicked, setWasClicked };
};

export default useClickOutside;