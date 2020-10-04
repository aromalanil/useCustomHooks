import { useState } from 'react';

/**
 *
 * Custom hook which returns a boolean state and a state toggle function.
 *
 * @param {boolean} initialValue Initial value of the state.
 * @returns {Array} Array containing boolean state and a state toggle function.
 */
const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => {
    setValue((currentValue) => !currentValue);
  };

  return [value, toggleValue];
};

export default useToggle;
