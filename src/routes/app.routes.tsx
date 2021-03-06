import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import UserRegister from '../screens/UserRegister';
import Resume from '../screens/Resume';

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
          height: Platform.OS == 'ios' ? 80 : 60,
          paddingVertical: Platform.OS == 'ios' ? 12 : 0
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
        component={UserRegister}
        options={{
          tabBarIcon: (({ size, color }) =>
            <FontAwesome5 name="user-alt" size={size} color={color} />
          )
        }}
      />

      <Screen
        name="Resumo"
        component={Resume}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons name="pie-chart" size={size} color={color} />
          )
        }}
      />
    </Navigator>

  )
}