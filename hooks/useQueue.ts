import { useState } from 'react';

/**
 * Custom hook for creating and managing Queues.
 *
 * @param {T[]} initialValue Initial value of the queue.
 * @return {[T[], (value: T) => void, () => T | undefined]} Array containing the queue, enqueue and dequeue functions respectively.
 */
const useQueue = <T>(initialValue: T[]): [T[], (value: T) => void, () => T | undefined] => {
  const [queue, setQueue] = useState<T[]>(initialValue);

  /**
   * Function to add a value to the rear of the queue.
   *
   * @param {T} value Value to be added to the queue.
   * @returns {undefined} This function returns nothing.
   */
  const enqueue = (value: T): void => {
    setQueue([...queue, value]);
  };

  /**
   * Function to remove the value in the front of the queue.
   *
   * @returns {T | undefined} The value removed from the queue.
   */
  const dequeue = (): T | undefined => {
    if (queue.length > 0) {
      const newQueue = [...queue];
      const dequeuedValue = newQueue.shift();
      setQueue(newQueue);
      return dequeuedValue;
    }
    return undefined;
  };

  return [queue, enqueue, dequeue];
};

export default useQueue;
