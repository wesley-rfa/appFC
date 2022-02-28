import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import { LoadContainer, TextActivity } from './styles';

interface Props {
  text: string
}

export default function LoadingContainer({ text }: Props) {
  const theme = useTheme();
  return (
    <LoadContainer>
      <ActivityIndicator color={theme.colors.primary} size="large" />
      <TextActivity>{text}</TextActivity>
    </LoadContainer>
  )
} 