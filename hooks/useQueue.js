import { useState } from 'react';

/**
 * Custom hook for creating and managing Queues.
 *
 * @param {Array} initialValue Initial value of the queue.
 * @return {Array} Array containing the queue, enqueue and dequeue functions respectively.
 */
const useQueue = (initialValue) => {
  const [queue, setQueue] = useState(initialValue);

  /**
   * Function to add a value to the rear of the queue.
   *
   * @param {any} value Value to be added to the queue.
   * @returns {undefined} This function returns nothing.
   */
  const enqueue = (value) => {
    setQueue([...queue, value]);
  };

  /**
   * Function to remove the value in the front of the queue.
   *
   * @returns {any} The value removed from the queue.
   */
  const dequeue = () => {
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
