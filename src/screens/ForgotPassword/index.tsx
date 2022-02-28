import React, { useState } from 'react';
import { StatusBar, ActivityIndicator, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import HeaderScreen from '../../components/HeaderScreen';
import PrimaryButton from '../../components/PrimaryButton';

import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';

import {
  Container, ForgotArea,
  ForgotTitle, ForgotText,
} from './styles';

import LoadingContainer from '../../components/LoadingContainer';
import InputMask from '../../components/Form/InputMask';
import InputText from '../../components/Form/InputText';
import { formatDate } from '../../utils/mask';

interface userRecoverPassWord {
  login: string,
  userCPF: string,
  userDateBirth: string,
}

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);

  const [login, setLogin] = useState('');
  const [userCPF, setUserCPF] = useState('');
  const [userDateBirth, setUserDateBirth] = useState('');

  const navigation = useNavigation<any>();

  function verifyInputs() {
    if (login == '' || userCPF == '' || userDateBirth == '') {
      Alert.alert('Por favor, preencha todos os campos.')
      return false;
    } else {
      return true;
    }
  }

  async function handleRecoverPassword() {
    if (verifyInputs()) {
      setIsLoading(true)
      let objForgotPassword: userRecoverPassWord = {
        login,
        userCPF: userCPF.replace(/-/g, "").replace(/\./g, ""),
        userDateBirth: formatDate(userDateBirth)
      }

      api.post('', {
        recoverPassword: true,
        objForgotPassword
      })
        .then(function (response) {
          setIsLoading(false)
          if (response.data) {
            navigation.navigate('ChangePassword', { userId: response.data.id, userName: response.data.name })
          } else {
            Alert.alert('Nenhum usuário encontrado.')
          }

        })
        .catch(function (error) {
          setIsLoading(false)
          console.log(error);
          Alert.alert('Erro ao buscar usuário. Por favor, tente novamente.')
        });
    }



  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar barStyle="light-content" />
        {isLoading ?
          <LoadingContainer text="Buscando Usuário" /> :
          <>
            <HeaderScreen text="Recuperar Senha" />
            <ForgotArea>
              <ForgotTitle>Esqueceu sua Senha?</ForgotTitle>
              <ForgotText>Preencha os campos abaixo que iremos te ajudar :)</ForgotText>
              <InputText
                placeholder="Usuário"
                value={login}
                onChangeText={setLogin}
              />
              <InputMask
                type="datetime"
                value={userDateBirth}
                onChangeText={setUserDateBirth}
                placeholder="Data de Nascimento"
              />
              <InputMask
                type={'cpf'}
                value={userCPF}
                onChangeText={setUserCPF}
                placeholder="CPF"
              />
              <PrimaryButton text="Recuperar" onPress={handleRecoverPassword} />
            </ForgotArea>
          </>
        }
      </Container>
    </TouchableWithoutFeedback>
  )
}