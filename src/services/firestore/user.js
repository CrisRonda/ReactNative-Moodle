import {db} from './config';
const userRef = () => db.collection('user');

const createUser = async (user) => {
  const _req = userRef().doc();
  const uid = _req.id;
  await _req.set({...user, uid});
  return uid;
};
const updateUser = async (uid, user) => {
  await userRef()
    .doc(uid)
    .update({...user});
  return uid;
};

export const setUserOnFirestore = async (user) => {
  const _res = await userRef().where('email', '==', user.email).limit(1).get();
  const _user = _res.docs.map((doc) => doc.id);
  let uid = '';
  if (_user.length > 0) {
    uid = await updateUser(_user[0], user);
  } else {
    uid = await createUser(user);
  }
  return uid;
};
