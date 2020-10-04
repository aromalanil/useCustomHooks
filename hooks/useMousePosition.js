import { useState, useEffect } from 'react';

/**
 * @typedef {Object} MousePosition
 * @property {number} x - X Coordinate of the mouse
 * @property {number} y - Y Coordinate of the mouse.
 */

/**
 *
 * Custom hook which return an object with current coordinates of mouse pointer.
 * @return {MousePosition} Object containing the coordinates of the mouse pointer.
 */
const useMousePosition = () => {
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    // Event listener to track the mouse location.
    const eventHandler = (e) => {
      const mousePosition = {
        x: e.clientX,
        y: e.clientY,
      };

      setCoordinates(mousePosition);
    };
    window.addEventListener('mousemove', eventHandler);

    return () => {
      window.removeEventListener('mousemove', eventHandler);
    };
  }, []);

  return coordinates;
};

export default useMousePosition;
