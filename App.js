import React from 'react';
import {StatusBar} from 'react-native';
import Notifications from './src/wrappers/Notifications';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="dark-content" animated translucent />
        <Notifications>
          <Navigation />
        </Notifications>
      </PersistGate>
    </Provider>
  );
};

export default App;
