import { useEffect, useState } from 'react';

/**
 *
 * Custom hook to know the current status of the device (online/offline).
 *
 * @return {Boolean} If the device is offline or not
 */
const useOfflineStatus = () => {
  const [isDeviceOffline, setDeviceOffline] = useState(false);

  useEffect(() => {
    const networkStatusListener = () => {
      setDeviceOffline(!navigator.onLine);
    };

    window.addEventListener('online', networkStatusListener);
    window.addEventListener('offline', networkStatusListener);

    return () => {
      window.removeEventListener('online', networkStatusListener);
      window.removeEventListener('offline', networkStatusListener);
    };
  }, []);

  return isDeviceOffline;
};

export default useOfflineStatus;
