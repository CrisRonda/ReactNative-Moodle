import axios from 'axios';
import {moodleURL} from '../config';

export const getUserCourses = async (token, userid) => {
  const req = await axios.get(
    `${moodleURL}${token}&moodlewsrestformat=json&wsfunction=core_enrol_get_users_courses&userid=${userid}`,
  );
  const courses = req.data;
  return courses;
};
