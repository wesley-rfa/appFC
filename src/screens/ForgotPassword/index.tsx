import React from 'react';
import HeaderScreen from '../../components/HeaderScreen';
import PrimaryButton from '../../components/PrimaryButton';

import { Container, ForgotArea, ForgotTitle, ForgotText, UserName, UserBirthDate, UserCPF } from './styles';

export default function ForgotPassword() {

  function handleForgotPassword() {
    console.log("recuperar Senha")
  }

  return (
    <Container>
      <HeaderScreen text="Recuperar Senha" />
      <ForgotArea>
        <ForgotTitle>Esqueceu sua Senha?</ForgotTitle>
        <ForgotText>Preencha os campos abaixo que iremos te ajudar :)</ForgotText>
        <UserName placeholder="Usuário"></UserName>
        <UserBirthDate placeholder="Data de Nascimento"></UserBirthDate>
        <UserCPF placeholder="CPF"></UserCPF>
        <PrimaryButton text="Recuperar" onPress={handleForgotPassword} />
      </ForgotArea>
    </Container>
  )
}