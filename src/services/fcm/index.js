import messaging from '@react-native-firebase/messaging';
import {Platform} from 'react-native';

export const registerIosAppWithFCM = async () => {
  if (Platform === 'ios') {
    await messaging().registerDeviceForRemoteMessages();
    await messaging().setAutoInitEnabled(true);
  }
  await handleOnRegister();
};

const getToken = () => messaging().getToken();

const checkPermission = async () => {
  const currentPermission = await messaging().hasPermission();
  if (currentPermission === messaging.AuthorizationStatus.NOT_DETERMINED) {
    return messaging().requestPermission();
  }
  return (
    currentPermission === messaging.AuthorizationStatus.AUTHORIZED ||
    currentPermission === messaging.AuthorizationStatus.PROVISIONAL
  );
};

const handleOnRegister = async () => {
  const permission = await checkPermission();
  if (permission) {
    const token = await getToken();
    return token;
  }
  throw new Error('Dont have permission ');
};

const onAppNotifications = (callback) => messaging().onMessage(callback);

export const register = ({onRegister, onForeground}) => {
  handleOnRegister(onRegister);
  onAppNotifications(onForeground);
};

export const unRegisterFCM = () => onAppNotifications(() => {});

export const backgroundNotifications = () => {
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {});
};
