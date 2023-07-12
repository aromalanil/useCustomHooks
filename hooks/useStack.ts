import { useState } from 'react';

/**
 * Custom hook for creating and managing Stack.
 *
 * @param {T[]} initialValue Initial value of the stack.
 * @return {[T[], (value: T) => void, () => T | undefined]} Array containing the stack, push and pop functions respectively.
 */
const useStack = <T>(initialValue: T[]): [T[], (value: T) => void, () => T | undefined] => {
  const [stack, setStack] = useState<T[]>(initialValue);

  /**
   * Function to add a value to the top of the stack.
   *
   * @param {T} value Value to be added to the stack.
   * @returns {undefined} This function returns nothing.
   */
  const push = (value: T): void => {
    setStack([...stack, value]);
  };

  /**
   * Function to remove the value from the top of the stack.
   *
   * @returns {T | undefined} The value removed from the stack.
   */
  const pop = (): T | undefined => {
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
