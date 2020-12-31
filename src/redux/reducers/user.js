import {userActions} from '../types';

const initialState = {
  username: '',
  token: '',
  isLogged: false,
  tokenNotification: '',
};
const {
  SESSION: {SET, CLEAR, SET_NOTIFICATION_TOKEN},
} = userActions;

const sessionReduccer = (state = initialState, action) => {
  switch (action.type) {
    case SET:
      return {isLogged: true, ...action.payload};
    case CLEAR:
      return {...initialState};
    case SET_NOTIFICATION_TOKEN:
      return {
        ...state,
        tokenNotification: action.payload.token,
        uid: action.payload.uid,
      };
    default:
      return state;
  }
};

export default sessionReduccer;
