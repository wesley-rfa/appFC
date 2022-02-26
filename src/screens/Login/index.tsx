import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import FcLogo from '../../assets/logoFerreiraCosta.svg';

import {
  Container, LogoArea,
  SignInArea, TitleLogin,
  TextInfo, UserName,
  UserPassword, ForgotPassword,
  SignInButton, SendText
} from './styles';

export default function Login() {

  function handleForgotPassword() {
    console.log('esqueceu a senha')
  }

  return (
    <Container>
      <LogoArea>
        <FcLogo width={RFValue(197)} height={RFValue(84)} />
      </LogoArea>
      <SignInArea>
        <TitleLogin>Fazer Login</TitleLogin>
        <TextInfo>Informe suas credenciais para acessar a plataforma.</TextInfo>
        <UserName placeholder="Usuário"></UserName>
        <UserPassword placeholder="Senha"></UserPassword>
        <ForgotPassword onPress={handleForgotPassword}>Esqueci minha senha</ForgotPassword>
        <SignInButton>
          <SendText>Entrar</SendText>
        </SignInButton>
      </SignInArea>

    </Container>
  )
}