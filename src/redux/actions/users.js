import {userActions} from '../types';

export const setSession = (session) => ({
  type: userActions.SESSION.SET,
  payload: session,
});

export const setNotificationToken = (token) => ({
  type: userActions.SESSION.SET_NOTIFICATION_TOKEN,
  payload: token,
});
export const clearSession = () => ({
  type: userActions.SESSION.CLEAR,
});
