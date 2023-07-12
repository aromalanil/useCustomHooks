import { useState } from 'react';

/**
 * Custom hook for copying text to the user's clipboard.
 * @returns {[boolean, (text: string) => void]} Array containing a boolean value indicating if the text was copied and a function to initiate the copy operation.
 */
const useCopyToClipboard = (): [boolean, (text: string) => void] => {
  const [copied, setCopied] = useState(false);

  /**
   * Copies the specified text to the user's clipboard.
   * @param {string} text - The text to be copied.
   */
  const copyToClipboard = (text: string): void => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => {
        console.error('Failed to copy to clipboard:', error);
      });
  };

  return [copied, copyToClipboard];
};

export default useCopyToClipboard;
