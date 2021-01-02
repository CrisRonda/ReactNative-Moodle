import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainStack from './Main/index';
import SinginStack from './Signin/index';
import useAuth from '../hooks/useAuth';

const Stack = createStackNavigator();

const MainNavigation = () => {
  const {isLogged} = useAuth();

  const renderScreens = () => {
    if (isLogged) {
      return (
        <Stack.Screen
          component={MainStack}
          options={{title: 'Cursos'}}
          name={'stack-home'}
        />
      );
    }

    return (
      <Stack.Screen
        component={SinginStack}
        name="stack-signin"
        options={{title: 'Inicia sesión'}}
      />
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {renderScreens()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigation;
