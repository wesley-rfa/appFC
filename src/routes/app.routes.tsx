import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Início" component={Home} />
      <Screen name="Cadastrar" component={Home} />
      <Screen name="Resumo" component={Home} />
    </Navigator>
  )
}