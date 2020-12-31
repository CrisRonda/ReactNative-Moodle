import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['sessionReduccer'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);
