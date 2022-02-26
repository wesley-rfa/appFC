import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import HeaderScreen from '../../components/HeaderScreen';
import PrimaryButton from '../../components/PrimaryButton';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Container, ChangeArea, ChangeTitle, ChangeText, NewPassword, RepeatNewPassword } from './styles';

interface Params {
  userId: number,
  userName: string,
}

export default function ChangePassword() {

  const navigation = useNavigation<any>();
  const route = useRoute();
  const user = route.params as Params;

  function handleChangeConfirmPassword() {
    console.log(user)
    //navigation.navigate('PasswordSuccess')
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <HeaderScreen text="Alterar Senha" />
      <ChangeArea>
        <ChangeTitle>Informar Nova Senha</ChangeTitle>
        <ChangeText>Por favor {user.userName} informe sua nova senha.</ChangeText>
        <NewPassword placeholder="Nova Senha" ></NewPassword>
        <RepeatNewPassword placeholder="Repetir Nova Senha"></RepeatNewPassword>
        <PrimaryButton text="Confirmar" onPress={handleChangeConfirmPassword} />
      </ChangeArea>
    </Container>
  )
}