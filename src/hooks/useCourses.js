import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setCourses} from '../redux/actions';
import {getUserCourses} from '../services/moodle/courses';
import useFetch from './useFetch';
import useUser from './useUser';

const useCourses = () => {
  const {fetch} = useFetch();
  const {id, token} = useUser();
  const dispatch = useDispatch();
  const {courses} = useSelector(({coursesState}) => coursesState);
  const getCourses = useCallback(async () => {
    const _courses = await fetch(() => getUserCourses(token, id));
    dispatch(setCourses(_courses));
    return courses;
  }, [id, token]);
  return {getCourses, courses};
};

export default useCourses;
