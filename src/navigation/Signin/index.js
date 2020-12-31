import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/Signin/Login';
import Home from '../../screens/Main/Home';

const Stack = createStackNavigator();

function SingInNavigation() {
  return (
    <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen
        name="screen-login"
        options={{title: 'Login'}}
        component={LoginScreen}
      />
      <Stack.Screen
        name="screen-home"
        options={{title: 'Courses'}}
        component={Home}
      />
    </Stack.Navigator>
  );
}
export default SingInNavigation;
