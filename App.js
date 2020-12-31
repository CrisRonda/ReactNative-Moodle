import React from 'react';
import {StatusBar} from 'react-native';
import Notifications from './src/wrappers/Notifications';
import Navigation from './src/navigation';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Notifications>
        <Navigation />
      </Notifications>
    </>
  );
};

export default App;
