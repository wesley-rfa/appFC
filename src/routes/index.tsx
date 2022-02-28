import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes';
import { useAuth } from '../hooks/auth';
import { AppStackRoutes } from './appStack.routes';

export function Routes() {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user.id ? <AppStackRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}