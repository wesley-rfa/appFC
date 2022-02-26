import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useNavigation } from '@react-navigation/native';

import FcLogo from '../../assets/logoFerreiraCosta.svg';
import PrimaryButton from '../../components/PrimaryButton';

import {
  Container, LogoArea,
  SignInArea, TitleLogin,
  TextInfo, UserName,
  UserPassword, ForgotPassword
} from './styles';

export default function Login() {
  const navigation = useNavigation<any>();

  function handleForgotPassword() {
    console.log('esqueceu a senha')
    navigation.navigate('Forgot')
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <LogoArea>
        <FcLogo width={RFValue(197)} height={RFValue(84)} />
      </LogoArea>
      <SignInArea>
        <TitleLogin>Fazer Login</TitleLogin>
        <TextInfo>Informe suas credenciais para acessar a plataforma.</TextInfo>
        <UserName placeholder="Usuário"></UserName>
        <UserPassword placeholder="Senha"></UserPassword>
        <ForgotPassword onPress={handleForgotPassword}>Esqueci minha senha</ForgotPassword>
        <PrimaryButton text="Entrar" />
      </SignInArea>

    </Container>
  )
}