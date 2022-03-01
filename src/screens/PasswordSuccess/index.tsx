import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import {
  Container, SuccessArea,
  SuccessIcon, SuccessTitle,
  SuccessText, BackLoginButton,
  ButtonText
} from './styles';

interface Params {
  userName: string,
}

export default function PasswordSuccess() {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { userName } = route.params as Params;

  function handleBackToLogin() {
    navigation.navigate('Login')
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <SuccessArea>
        <SuccessIcon name="check-circle" />
        <SuccessTitle>Senha Alterada!</SuccessTitle>
        <SuccessText>{userName}, sua senha foi alterada com sucesso!</SuccessText>
      </SuccessArea>
      <BackLoginButton onPress={handleBackToLogin}>
        <ButtonText>Voltar para o Login</ButtonText>
      </BackLoginButton>
    </Container>
  )
}