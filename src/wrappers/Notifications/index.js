import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setNotificationToken} from '../../redux/actions';
import {
  register,
  registerIosAppWithFCM,
  unRegisterFCM,
} from '../../services/fcm';
import {setUserOnFirestore} from '../../services/firestore/user';
const WrapperNotifications = ({children}) => {
  const {tokenNotification: currentToken, isLogged, ...rest} = useSelector(
    ({sessionState}) => sessionState,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const onRegister = async (token) => {
      if (currentToken !== token && isLogged) {
        console.log('Guarndando...');
        const uid = await setUserOnFirestore({...rest, token});
        console.log('Listo!...', uid);
        dispatch(setNotificationToken({token, uid}));
      }
    };

    const registerNotifications = async () => {
      await registerIosAppWithFCM();

      register({onRegister});
    };
    registerNotifications();

    const unregisterNotifications = () => {
      unRegisterFCM();
    };
    return unregisterNotifications();
  }, [currentToken]);

  return children;
};

export default WrapperNotifications;
