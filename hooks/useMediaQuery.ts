import { useEffect, useState } from 'react';

/**
 *
 * A custom hook which takes a media query as the argument and returns a state
 * which will be true when the media query is active and false when not
 *
 * @example
 * const isMobile = useMediaQuery("(max-width:600px)");
 *
 * @returns {boolean} Is the media query active
 */
const useMediaQuery = (mediaQuery: string): boolean => {
  const [doesQueryMatch, setDoesQueryMatch] = useState<boolean>(
    () => window.matchMedia(mediaQuery).matches,
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);

    const mediaQueryChangeHandler = (e: MediaQueryListEvent) => {
      setDoesQueryMatch(e.matches);
    };

    // Adding event listener for media query change on component mount
    mediaQueryList.addEventListener('change', mediaQueryChangeHandler);

    // Removing event listener component unmount
    return () => {
      mediaQueryList.removeEventListener('change', mediaQueryChangeHandler);
    };
  }, [mediaQuery]);

  return doesQueryMatch;
};

export default useMediaQuery;
