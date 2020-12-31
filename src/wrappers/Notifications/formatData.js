export const formatNotify = (notify) => {
  const {foreground} = notify;
  if (foreground) {
    const {path, id} = notify?.data?.item?.data;
    return {
      path: JSON.parse(path),
      idNotification: id,
    };
  }
  const {path, id} = notify;
  return {
    path: JSON.parse(path),
    idNotification: id,
  };
};

export const formatLocalNotify = (notify) => ({
  title: notify?.notification?.title || '',
  body: notify?.notification?.body || '',
  options: {
    soundName: 'default',
    playSound: true,
  },
});
