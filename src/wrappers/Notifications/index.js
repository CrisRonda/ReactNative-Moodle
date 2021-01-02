import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setNotificationToken} from '../../redux/actions';
import {
  register,
  registerIosAppWithFCM,
  unRegisterFCM,
} from '../../services/fcm';
import {setUserOnFirestore} from '../../services/firestore/user';
import {formatLocalNotify} from './formatData';
import {configureLocalNotification, showNotification} from './localConfig';
const WrapperNotifications = ({children}) => {
  const {tokenNotification: currentToken, isLogged, ...rest} = useSelector(
    ({sessionState}) => sessionState,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const onRegister = async (token) => {
      if (currentToken !== token && isLogged) {
        const uid = await setUserOnFirestore({...rest, token});
        dispatch(setNotificationToken({token, uid}));
      }
    };
    const showLocalNotification = async (notify) => {
      const {title, body, options} = formatLocalNotify(notify);
      showNotification(0, title, body, notify, options);
    };

    const registerNotifications = async () => {
      await registerIosAppWithFCM();
      register({onRegister, onForeground: showLocalNotification});
      configureLocalNotification();
    };
    registerNotifications();

    const unregisterNotifications = () => {
      unRegisterFCM();
    };
    return unregisterNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentToken, dispatch, isLogged]);

  return children;
};

export default WrapperNotifications;
