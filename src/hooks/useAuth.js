import {useDispatch, useSelector} from 'react-redux';
import {clearSession, setSession} from '../redux/actions';
import {loginMoodle} from '../services/moodle/auth';
import useFetch from './useFetch';

const useAuth = () => {
  const {isLogged} = useSelector(({sessionState}) => sessionState);
  const dispatch = useDispatch();
  const {fetch} = useFetch();
  const login = async ({username, password}) => {
    const user = await fetch(() => loginMoodle({username, password}));
    if (user) {
      dispatch(setSession(user));
    }
    return user;
  };

  const logout = () => dispatch(clearSession());
  return {login, logout, isLogged};
};

export default useAuth;
