import {useEffect} from 'react';
import {registerIosAppWithFCM, unRegisterFCM} from '../../services/fcm';
const WrapperNotifications = ({children}) => {
  useEffect(() => {
    const registerNotifications = async () => {
      await registerIosAppWithFCM();
    };
    registerNotifications();

    const unregisterNotifications = () => {
      unRegisterFCM();
    };

    return unregisterNotifications();
  }, []);

  return children;
};

export default WrapperNotifications;
