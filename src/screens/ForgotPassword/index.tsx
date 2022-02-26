import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import HeaderScreen from '../../components/HeaderScreen';
import PrimaryButton from '../../components/PrimaryButton';

import { Container, ForgotArea, ForgotTitle, ForgotText, UserName, UserBirthDate, UserCPF } from './styles';

interface userRecoverPassWord {
  userName: string,
  userCPF: string,
}

export default function ForgotPassword() {
  const [userName, setUserName] = useState('');
  const [userCPF, setuserCPF] = useState('');

  function handleRecoverPassword() {
    let objForgotPassword: userRecoverPassWord = {
      userName,
      userCPF
    }
    console.log(objForgotPassword)
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <HeaderScreen text="Recuperar Senha" />
      <ForgotArea>
        <ForgotTitle>Esqueceu sua Senha?</ForgotTitle>
        <ForgotText>Preencha os campos abaixo que iremos te ajudar :)</ForgotText>
        <UserName placeholder="Usuário" onChangeText={setUserName}></UserName>
        <UserBirthDate placeholder="Data de Nascimento"></UserBirthDate>
        <UserCPF placeholder="CPF" onChangeText={setuserCPF}></UserCPF>
        <PrimaryButton text="Recuperar" onPress={handleRecoverPassword} />
      </ForgotArea>
    </Container>
  )
}