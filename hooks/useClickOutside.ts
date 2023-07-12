import React, { useEffect, useRef, useState, Dispatch, SetStateAction } from 'react';

interface ElementRef {
  myRef: React.MutableRefObject<any>;
  wasClicked: boolean;
  setWasClicked: Dispatch<SetStateAction<boolean>>;
}

/**
 * Custom hook which return an object with the reference to the DOM element,
 * the state and the setter of the state.
 * @return {ElementRef} Object containing the ref of the DOM element,
 *  the click state and its setter.
 */
const useClickOutside = (): ElementRef => {
  const [wasClicked, setWasClicked] = useState<boolean>(false);
  const myRef = useRef<any>(null);

  const clickOutside = (event: MouseEvent): void => {
    if (myRef.current && !myRef.current.contains(event.target)) {
      setWasClicked(true);
    }
  };

  useEffect(() => {
    // Event listener to track the component activity.
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('click', clickOutside);
    };
  }, []);

  return { myRef, wasClicked, setWasClicked };
};

export default useClickOutside;
