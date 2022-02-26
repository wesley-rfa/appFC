import React, { useState } from 'react';
import { ActivityIndicator, Alert, StatusBar } from 'react-native';
import HeaderScreen from '../../components/HeaderScreen';
import PrimaryButton from '../../components/PrimaryButton';

import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import {
  Container, ChangeArea,
  ChangeTitle, ChangeText,
  NewPassword, RepeatNewPassword,
  LoadContainer
} from './styles';
import { api } from '../../services/api';

interface Params {
  userId: number,
  userName: string,
}

export default function ChangePassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');

  const navigation = useNavigation<any>();
  const theme = useTheme()
  const route = useRoute();
  const user = route.params as Params;

  function verifyInputs() {
    if (newPassword == '' || repeatNewPassword == '') {
      Alert.alert('Por favor, preencha todos os campos.')
      return false
    } else {
      return true
    }
  }

  function handleChangeConfirmPassword() {
    setIsLoading(true)
    if (verifyInputs()) {
      api.post('', {
        updatePassword: true,
        userId: user.userId,
        newPassword
      })
        .then(function (response) {
          setIsLoading(false)
          console.log(response.data)
          navigation.navigate('PasswordSuccess')
        })
        .catch(function (error) {
          setIsLoading(false)
          Alert.alert('Erro ao alterar senha. Por favor, tente novamente.')
        });
    }
  }

  return (
    <Container>
      {isLoading ?
        <LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadContainer> :
        <>
          <StatusBar barStyle="light-content" />
          <HeaderScreen text="Alterar Senha" />
          <ChangeArea>
            <ChangeTitle>Informar Nova Senha</ChangeTitle>
            <ChangeText>Por favor {user.userName} informe sua nova senha.</ChangeText>

            <NewPassword
              placeholder="Nova Senha"
              onChangeText={setNewPassword}
              secureTextEntry={true}
            />
            <RepeatNewPassword placeholder="Repetir Nova Senha" onChangeText={setRepeatNewPassword}></RepeatNewPassword>

            <PrimaryButton text="Confirmar" onPress={handleChangeConfirmPassword} />
          </ChangeArea>
        </>
      }
    </Container>
  )
}