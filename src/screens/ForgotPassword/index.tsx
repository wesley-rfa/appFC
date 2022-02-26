import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import HeaderScreen from '../../components/HeaderScreen';
import PrimaryButton from '../../components/PrimaryButton';

import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';

import { Container, ForgotArea, ForgotTitle, ForgotText, UserName, UserBirthDate, UserCPF } from './styles';

interface userRecoverPassWord {
  userName: string,
  userCPF: string,
  userDateBirth: string,
}

export default function ForgotPassword() {
  const [userName, setUserName] = useState('');
  const [userCPF, setuserCPF] = useState('');
  const [userDateBirth, setUserDateBirth] = useState('');

  const navigation = useNavigation<any>();

  async function handleRecoverPassword() {
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
        //console.log(objForgotPassword)
        console.log(response.data)
        //navigation.navigate('ChangePassword', { userId: 1, userName: 'teste' })
      })
      .catch(function (error) {
        console.log(error);
      });


  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <HeaderScreen text="Recuperar Senha" />
      <ForgotArea>
        <ForgotTitle>Esqueceu sua Senha?</ForgotTitle>
        <ForgotText>Preencha os campos abaixo que iremos te ajudar :)</ForgotText>
        <UserName placeholder="Usuário" onChangeText={setUserName}></UserName>
        <UserBirthDate placeholder="Data de Nascimento" onChangeText={setUserDateBirth}></UserBirthDate>
        <UserCPF placeholder="CPF" onChangeText={setuserCPF}></UserCPF>
        <PrimaryButton text="Recuperar" onPress={handleRecoverPassword} />
      </ForgotArea>
    </Container>
  )
}