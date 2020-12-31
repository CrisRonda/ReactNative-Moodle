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
      console.log('SET');
      return {isLogged: true, ...action.payload};
    case CLEAR:
      console.log('CLEAR');
      return {...initialState};

    default:
      return state;
  }
};

export default sessionReduccer;
