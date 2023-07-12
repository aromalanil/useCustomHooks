import { useState } from 'react';

/**
 *
 * Custom hook which returns a boolean state and a state toggle function.
 *
 * @param {boolean} initialValue Initial value of the state.
 * @returns {[boolean, () => void]} Array containing boolean state and a state toggle function.
 */
const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggleValue = (): void => {
    setValue((currentValue) => !currentValue);
  };

  return [value, toggleValue];
};

export default useToggle;
