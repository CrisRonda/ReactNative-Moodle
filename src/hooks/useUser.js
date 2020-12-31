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
  } = useSelector(({sessionState}) => sessionState);
  const displayName = fullname || `${firstname || ''} ${lastname || ''}`;
  return {
    id,
    userName: username,
    displayName,
    email,
    profileimageurl,
  };
};

export default useUser;
