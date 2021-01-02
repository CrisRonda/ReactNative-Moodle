import {combineReducers} from 'redux';
import sessionState from './user';
import coursesState from './courses';

export default combineReducers({sessionState, coursesState});
