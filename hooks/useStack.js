import { useState } from 'react';

/**
 * Custom hook for creating and managing Stack.
 *
 * @param {Array} initialValue Initial value of the stack.
 * @return {Array} Array containing the stack, push and pop functions respectively.
 */
const useStack = (initialValue) => {
  const [stack, setStack] = useState(initialValue);

  /**
   *
   * Function to add a value to the top of the stack.
   *
   * @param {any} value Value to be added to the stack.
   * @returns {undefined} This function returns nothing.
   */
  const push = (value) => {
    setStack([...stack, value]);
  };

  /**
   *
   * Function to remove the value from the top of the stack.
   *
   * @returns {any} The value removed from the stack.
   */
  const pop = () => {
    if (stack.length > 0) {
      const newStack = [...stack];
      const poppedValue = newStack.pop();
      setStack(newStack);
      return poppedValue;
    }
    return undefined;
  };

  return [stack, push, pop];
};

export default useStack;
