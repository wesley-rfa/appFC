import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>

      <Screen name="Login" component={Login} />
      <Screen name="Forgot" component={ForgotPassword} />
    </Navigator>
  )
}
