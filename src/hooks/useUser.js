import {useSelector} from 'react-redux';

const useUser = () => {
  const {
    id,
    username,
    firstname,
    lastname,
    fullname,
    email,
    profileimageurl,
    token,
  } = useSelector(({sessionState}) => sessionState);
  const displayName = fullname || `${firstname || ''} ${lastname || ''}`;
  return {
    id,
    userName: username,
    displayName,
    email,
    profileimageurl,
    token,
  };
};

export default useUser;
