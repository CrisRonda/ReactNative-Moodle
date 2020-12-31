import firestore from '@react-native-firebase/firestore';
import '@react-native-firebase/app';

const db = firestore();

// if (__DEV__) {
//   db.settings({host: '127.0.0.1:8080', ssl: false, persistence: false});
//   fn.useFunctionsEmulator('http://127.0.0.1:5001');
// }
export {db};
