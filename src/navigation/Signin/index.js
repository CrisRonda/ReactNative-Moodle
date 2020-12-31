import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/Signin/Login';

const Stack = createStackNavigator();

function SingInNavigation() {
  return (
    <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen
        name="screen-login"
        options={{title: 'Login'}}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
}
export default SingInNavigation;
