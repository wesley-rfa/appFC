import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Container, SuccessArea, SuccessIcon, SuccessTitle, SuccessText, BackLoginButton, ButtonText } from './styles';


export default function PasswordSuccess() {
  const navigation = useNavigation<any>();

  function handleBackToLogin() {
    navigation.navigate('Login')
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <SuccessArea>
        <SuccessIcon name="check-circle" />
        <SuccessTitle>Senha Alterada!</SuccessTitle>
        <SuccessText>Wesley, sua senha foi alterada com sucesso!</SuccessText>
      </SuccessArea>
      <BackLoginButton onPress={handleBackToLogin}>
        <ButtonText>Voltar para o Login</ButtonText>
      </BackLoginButton>
    </Container>
  )
}