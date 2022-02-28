import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import { LoadContainer } from './styles';

export default function LoadingContainer() {
  const theme = useTheme();
  return (
    <LoadContainer>
      <ActivityIndicator color={theme.colors.primary} size="large" />
    </LoadContainer>
  )
} 