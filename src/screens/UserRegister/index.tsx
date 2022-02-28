import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  Container, Header,
  TextRegister, Body,
  Form
} from './styles';
import HeaderScreen from '../../components/HeaderScreen';
import PrimaryButton from '../../components/PrimaryButton';
import InputPhone from '../../components/Form/InputPhone';

export default function UserRegister() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation<any>();



  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <HeaderScreen text="Cadastro de Usuário" />
      <Header>
        <TextRegister>Para cadastrar um novo usuário preencha os campos abaixo.</TextRegister>
      </Header>
      <Body>
        <Form>
          <InputPhone
            type={'cel-phone'}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </Form>
        <PrimaryButton text="Confirmar" />
      </Body>
    </Container>
  )
}