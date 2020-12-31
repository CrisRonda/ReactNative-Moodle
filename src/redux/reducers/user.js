import {userActions} from '../types';

const initialState = {
  username: '',
  token: '',
  isLogged: false,
};
const {
  SESSION: {SET, CLEAR},
} = userActions;

const sessionReduccer = (state = initialState, action) => {
  switch (action.type) {
    case SET:
      return {isLogged: true, ...action.payload};
    case CLEAR:
      return {...initialState};

    default:
      return state;
  }
};

export default sessionReduccer;
