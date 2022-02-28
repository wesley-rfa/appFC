import React, { useState } from 'react';
import { ActivityIndicator, Alert, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components'

import FcLogo from '../../assets/logoFerreiraCosta.svg';
import PrimaryButton from '../../components/PrimaryButton';

import {
  Container, LogoArea,
  SignInArea, TitleLogin,
  TextInfo, UserName,
  UserPassword, ForgotPassword,
  ForgotText, LoadContainer
} from './styles';
import { useAuth } from '../../hooks/auth';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<any>();
  const theme = useTheme();
  const { signIn } = useAuth();

  function verifyInputs() {
    if (login == '' || password == '') {
      Alert.alert('Por favor, preencha todos os campos.')
      return false;
    } else {
      return true;
    }
  }

  async function handleSignIn() {
    if (verifyInputs()) {
      setIsLoading(true)
      await signIn(login, password)
      setIsLoading(false)
    }
  }

  function handleForgotPassword() {
    navigation.navigate('Forgot')
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      {isLoading ?
        <LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadContainer> :
        <>
          <LogoArea>
            <FcLogo width={RFValue(197)} height={RFValue(84)} />
          </LogoArea>

          <SignInArea>
            <TitleLogin>Fazer Login</TitleLogin>
            <TextInfo>Informe suas credenciais para acessar a plataforma.</TextInfo>

            <UserName
              placeholder="Usuário"
              onChangeText={setLogin}
            />
            <UserPassword
              placeholder="Senha"
              onChangeText={setPassword}
            />

            <ForgotPassword>
              <ForgotText onPress={handleForgotPassword}>Esqueci minha senha</ForgotText>
            </ForgotPassword>

            <PrimaryButton text="Entrar" onPress={handleSignIn} />
          </SignInArea>
        </>
      }
    </Container>
  )
}