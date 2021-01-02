import PushNotification from 'react-native-push-notification';

export const configureLocalNotification = (callback = () => {}) => {
  PushNotification.configure({
    onRegister() {},
    onNotification(notification) {
      return callback(notification);
    },
    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
  });
};

export const unRegisterLocalNotification = () => {
  PushNotification.unregister();
};

export const showNotification = (
  id,
  title,
  message,
  data = {},
  options = {},
) => {
  PushNotification.localNotification({
    /* Android Only Properties */
    ...buildAndroidNotification(
      id,
      title,
      message,
      data.notification?.android,
      options,
    ),
    /* iOS and Android properties */
    ...buildIOSNotification(id, data, options),
    /* iOS and Android properties */
    title: title || '',
    message: message || '',
    playSound: true,
    soundName: 'default',
    userInteraction: false, // BOOLEAN: If the notification was opened by the user from the notification area or not
  });
};

const buildAndroidNotification = (
  id,
  title,
  message,
  data = {},
  options = {},
) => {
  return {
    id,
    autoCancel: true,
    largeIcon: options.imageUrl || 'ic_launcher',
    smallIcon: options.smallIcon || 'ic_notification',
    bigText: message || '',
    subText: title || '',
    vibrate: true,
    vibration: 500,
    priority: 'high',
    importance: 'high',
    bigPictureUrl: data.imageUrl || '',
    color: data.color || '#ffcb05',
    data,
  };
};

const buildIOSNotification = (id, data = {}, options = {}) => {
  return {
    alertAction: options.alertAction || 'view',
    category: options.category || '',
    userInfo: {
      id,
      item: data,
    },
  };
};
