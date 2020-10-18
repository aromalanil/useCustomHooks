import { useState, useEffect } from 'react';

/**
 * Helper constants that determines the current screen size.
 * @constant
 * @type {string}
 */
export const MOBILE = 'MOBILE';
export const TABLET = 'TABLET';
export const DESKTOP = 'DESKTOP';

/**
 * A function which gets the width of the screen.
 * Returns one of three possible values depending of the screen's current width.
 *
 * @param {number} width
 * @returns {*} The constant corresponding the screen size.
 */
const getDevice = (width) => {
  if (width < 768) return MOBILE;
  if (width < 992) return TABLET;
  return DESKTOP;
};

/**
 * Custom useState hook which listens to resize events and
 * manage the viewport of the user's device.
 *
 * @returns {Object} viewport An object with the width of the user's viewport and the device type.
 */
function useViewport() {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    device: getDevice(window.innerWidth),
  });

  useEffect(() => {
    // Event listener to track the window resize.
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        device: getDevice(window.innerWidth),
      });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { viewport };
}

export default useViewport;
