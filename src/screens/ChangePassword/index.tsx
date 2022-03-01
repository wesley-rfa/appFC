import React, { useState } from 'react';
import { Alert, Keyboard, StatusBar, TouchableWithoutFeedback } from 'react-native';
import HeaderScreen from '../../components/HeaderScreen';
import PrimaryButton from '../../components/PrimaryButton';

import {
  Container, ChangeArea,
  ChangeTitle, ChangeText
} from './styles';

import { api } from '../../services/api';
import LoadingContainer from '../../components/LoadingContainer';
import InputText from '../../components/Form/InputText';
import { useNavigation, useRoute } from '@react-navigation/native';

interface Params {
  userId: number,
  userName: string,
}

export default function ChangePassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');

  const navigation = useNavigation<any>();
  const route = useRoute();
  const user = route.params as Params;

  function verifyInputs() {
    if (newPassword == '' || repeatNewPassword == '') {
      Alert.alert('Por favor, preencha todos os campos.')
      return false
    } if (newPassword !== repeatNewPassword) {
      Alert.alert('As senhas não correspondem.')
      return false
    } else {
      return true
    }
  }

  function handleChangeConfirmPassword() {
    if (verifyInputs()) {
      setIsLoading(true)
      api.post('', {
        updatePassword: true,
        userId: user.userId,
        newPassword
      })
        .then(function (response) {
          setIsLoading(false)
          console.log(response.data)
          navigation.navigate('PasswordSuccess', { userName: user.userName })
        })
        .catch(function (error) {
          setIsLoading(false)
          Alert.alert('Erro ao alterar senha. Por favor, tente novamente.')
        });
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        {isLoading ?
          <LoadingContainer text="Alterando Senha" /> :
          <>
            <StatusBar barStyle="light-content" />
            <HeaderScreen text="Alterar Senha" />
            <ChangeArea>
              <ChangeTitle>Informar Nova Senha</ChangeTitle>
              <ChangeText>Por favor {user.userName} informe sua nova senha.</ChangeText>

              <InputText
                placeholder="Nova Senha"
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry={true}
              />
              <InputText
                placeholder="Repetir Nova Senha"
                value={repeatNewPassword}
                onChangeText={setRepeatNewPassword}
                secureTextEntry={true}
              />

              <PrimaryButton text="Confirmar" onPress={handleChangeConfirmPassword} />
            </ChangeArea>
          </>
        }
      </Container>
    </TouchableWithoutFeedback>
  )
}