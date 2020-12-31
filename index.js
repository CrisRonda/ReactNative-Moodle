import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {backgroundNotifications} from './src/services/fcm';

backgroundNotifications();
function HeadlessCheck({isHeadless}) {
  if (isHeadless) {
    return null;
  }
  return <App />;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);
