import {db} from './config';
const userRef = () => db.collection('user');

const createUser = async (user) => {
  const uid = userRef().doc().id;
  await userRef()
    .doc()
    .set({...user, uid});
  return uid;
};
const updateUser = async (uid, user) => {
  await userRef()
    .doc(uid)
    .update({...user});
  return uid;
};

export const setUserOnFirestore = async (user) => {
  const _user = await userRef().where('email', '==', user.email).limit(1).get();
  let uid = '';
  if (_user.size > 0) {
    uid = await updateUser(_user.id, user);
  } else {
    uid = await createUser(user);
  }
  return uid;
};
