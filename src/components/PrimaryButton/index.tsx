import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonText } from './styles';

interface PrimaryButtonProps extends TouchableOpacityProps {
  text: string
}

export default function PrimaryButton({ text, onPress }: PrimaryButtonProps) {
  return (
    <Container onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Container>
  )
}