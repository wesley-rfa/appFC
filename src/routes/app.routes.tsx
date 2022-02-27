import React from 'react';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme()
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 80,
          paddingVertical: 12
        }
      }}
    >
      <Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons name="format-list-bulleted" size={size} color={color} />
          )
        }}
      />

      <Screen
        name="Cadastrar"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) =>
            <FontAwesome5 name="user-alt" size={size} color={color} />
          )
        }}
      />

      <Screen
        name="Resumo"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons name="pie-chart" size={size} color={color} />
          )
        }}
      />
    </Navigator>
  )
}