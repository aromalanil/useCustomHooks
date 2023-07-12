import { useState, useEffect } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

/**
 *
 * Custom hook which return an object with current coordinates of mouse pointer.
 * @return {MousePosition} Object containing the coordinates of the mouse pointer.
 */
const useMousePosition = (): MousePosition => {
  const [coordinates, setCoordinates] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    // Event listener to track the mouse location.
    const eventHandler = (e: MouseEvent) => {
      const mousePosition: MousePosition = {
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
