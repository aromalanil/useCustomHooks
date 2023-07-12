import { useEffect, useState } from 'react';

/**
 *
 * Custom hook to know the current status of the device (online/offline).
 *
 * @return {boolean} If the device is offline or not
 */
const useOfflineStatus = (): boolean => {
  const [isDeviceOffline, setDeviceOffline] = useState<boolean>(!navigator.onLine);

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
