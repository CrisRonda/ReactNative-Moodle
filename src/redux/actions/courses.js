import {coursesActions} from '../types';

export const setCourses = (courses) => ({
  type: coursesActions.SET,
  payload: courses,
});
