import {userActions} from '../types';

export const setSession = (session) => ({
  type: userActions.SESSION.SET,
  payload: session,
});
export const clearSession = () => ({
  type: userActions.SESSION.CLEAR,
});
