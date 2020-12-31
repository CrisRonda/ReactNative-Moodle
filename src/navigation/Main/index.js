import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/Main/Home';

const Stack = createStackNavigator();

function SingInNavigation() {
  return (
    <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen name="screen-home" component={Home} />
    </Stack.Navigator>
  );
}
export default SingInNavigation;
