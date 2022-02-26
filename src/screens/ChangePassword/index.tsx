import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import HeaderScreen from '../../components/HeaderScreen';
import PrimaryButton from '../../components/PrimaryButton';

import { useNavigation } from '@react-navigation/native';

import { Container, ChangeArea, ChangeTitle, ChangeText, NewPassword, RepeatNewPassword } from './styles';


export default function ChangePassword() {

  const navigation = useNavigation<any>();
  function handleChangeConfirmPassword() {
    navigation.navigate('PasswordSuccess')
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <HeaderScreen text="Alterar Senha" />
      <ChangeArea>
        <ChangeTitle>Informar Nova Senha</ChangeTitle>
        <ChangeText>Por favor Wesley informe sua nova senha.</ChangeText>
        <NewPassword placeholder="Nova Senha" ></NewPassword>
        <RepeatNewPassword placeholder="Repetir Nova Senha"></RepeatNewPassword>
        <PrimaryButton text="Confirmar" onPress={handleChangeConfirmPassword} />
      </ChangeArea>
    </Container>
  )
}