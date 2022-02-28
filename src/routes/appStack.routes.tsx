import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ForgotPassword from '../screens/ChangeUser';
import { AppRoutes } from './app.routes';

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>

      <Screen name="AppRoutes" component={AppRoutes} />
      <Screen name="ChangeUser" component={ForgotPassword} />
    </Navigator>
  )
}
