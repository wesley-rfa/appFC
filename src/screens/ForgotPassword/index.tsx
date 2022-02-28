import React, { useState } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';

import HeaderScreen from '../../components/HeaderScreen';
import PrimaryButton from '../../components/PrimaryButton';

import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { useTheme } from 'styled-components';

import {
  Container, ForgotArea,
  ForgotTitle, ForgotText,
  UserName, UserBirthDate,
  UserCPF, LoadContainer
} from './styles';

interface userRecoverPassWord {
  userName: string,
  userCPF: string,
  userDateBirth: string,
}

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [userCPF, setUserCPF] = useState('');
  const [userDateBirth, setUserDateBirth] = useState('');

  const navigation = useNavigation<any>();
  const theme = useTheme()

  async function handleRecoverPassword() {
    setIsLoading(true)
    let objForgotPassword: userRecoverPassWord = {
      userName,
      userCPF,
      userDateBirth
    }

    api.post('', {
      recoverPassword: true,
      objForgotPassword
    })
      .then(function (response) {
        setIsLoading(false)
        console.log(response.data)
        navigation.navigate('ChangePassword', { userId: response.data.id, userName: response.data.nome })
      })
      .catch(function (error) {
        setIsLoading(false)
        console.log(error);
      });


  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      {isLoading ?
        <LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadContainer> :
        <>
          <HeaderScreen text="Recuperar Senha" />
          <ForgotArea>
            <ForgotTitle>Esqueceu sua Senha?</ForgotTitle>
            <ForgotText>Preencha os campos abaixo que iremos te ajudar :)</ForgotText>
            <UserName
              placeholder="Usuário"
              onChangeText={setUserName}
            />
            <UserBirthDate
              placeholder="Data de Nascimento"
              onChangeText={setUserDateBirth}
            />
            <UserCPF
              placeholder="CPF"
              onChangeText={setUserCPF}
            />
            <PrimaryButton text="Recuperar" onPress={handleRecoverPassword} />
          </ForgotArea>
        </>
      }
    </Container>
  )
}