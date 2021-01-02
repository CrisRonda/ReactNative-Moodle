import {coursesActions} from '../types';

const initialState = {
  courses: [],
};
const {SET} = coursesActions;

const sessionReduccer = (state = initialState, action) => {
  switch (action.type) {
    case SET:
      return {...state, courses: action.payload};
    default:
      return state;
  }
};

export default sessionReduccer;
