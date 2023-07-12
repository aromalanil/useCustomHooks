import { useState, useEffect } from 'react';

interface BrowserInfo {
  name: string;
  version: string;
  platform: string;
}

/**
 * Custom hook to provide information about the user's browser.
 * @returns {BrowserInfo | null} Object containing browser information, or null if the information is not available.
 */
const useBrowser = (): BrowserInfo | null => {
  const [browserInfo, setBrowserInfo] = useState<BrowserInfo | null>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const browserName = getBrowserName(userAgent);
    const browserVersion = getBrowserVersion(userAgent);
    const platform = getPlatform(userAgent);

    setBrowserInfo({ name: browserName, version: browserVersion, platform: platform });
  }, []);

  const getBrowserName = (userAgent: string): string => {
    if (userAgent.includes("Firefox")) {
      return "Firefox";
    } else if (userAgent.includes("Chrome")) {
      return "Chrome";
    } else if (userAgent.includes("Safari")) {
      return "Safari";
    } else if (userAgent.includes("Edge")) {
      return "Edge";
    } else if (userAgent.includes("Opera")) {
      return "Opera";
    } else if (userAgent.includes("IE")) {
      return "Internet Explorer";
    } else {
      return "Unknown";
    }
  };

  const getBrowserVersion = (userAgent: string): string => {
    const matches = userAgent.match(/(Firefox|Chrome|Safari|Edge|Opera|IE)\/?\s*(\d+)/);
    if (matches && matches.length === 3) {
      return matches[2];
    } else {
      return "Unknown";
    }
  };

  const getPlatform = (userAgent: string): string => {
    if (userAgent.includes("Win")) {
      return "Windows";
    } else if (userAgent.includes("Mac")) {
      return "Mac";
    } else if (userAgent.includes("Linux")) {
      return "Linux";
    } else if (userAgent.includes("Android")) {
      return "Android";
    } else if (userAgent.includes("iOS")) {
      return "iOS";
    } else {
      return "Unknown";
    }
  };

  return browserInfo;
};

export default useBrowser;
