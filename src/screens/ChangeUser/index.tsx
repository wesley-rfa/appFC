import React, { useEffect, useState } from 'react';
import { Alert, Keyboard, StatusBar, TouchableWithoutFeedback } from 'react-native';


import {
  Container, Header,
  TextRegister, Body,
  Form
} from './styles';

import HeaderScreen from '../../components/HeaderScreen';
import { api } from '../../services/api';
import LoadingContainer from '../../components/LoadingContainer';
import InputText from '../../components/Form/InputText';
import InputMask from '../../components/Form/InputMask';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { UserCardProps } from '../../components/UserCard';
import { formatDate } from '../../utils/mask';

interface setUser {
  id: string;
  name: string;
  login: string;
  email: string;
  motherName: string;
  cpf: string;
  phoneNumber: string;
  dateBirth: string;
}

export default function ChangeUser() {
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cpf, setCpf] = useState('');
  const [date, setDate] = useState('');
  const [motherName, setMotherName] = useState('');

  const navigation = useNavigation<any>();
  const route = useRoute();
  const user = route.params as UserCardProps;

  function verifyEmptyInputs() {
    if (name == '' || login == '' || email == '' || phoneNumber == ''
      || cpf == '' || date == '' || motherName == '') {
      return false
    } else {
      return true
    }
  }

  function verifyInputs() {
    if (date.length == 10) {
      return true
    } else {
      Alert.alert('Data de Nascimento Inválida')
      return false
    }

  }


  function handleChangeUser() {
    if (verifyEmptyInputs()) {
      setIsLoading(true)
      if (verifyInputs()) {
        const objUser = {
          id: user.id,
          name,
          login,
          email,
          motherName,
          cpf: cpf.replace(/-/g, "").replace(/\./g, ""),
          phoneNumber: phoneNumber.replace(/\D/g, ""),
          dateBirth: formatDate(date)
        }
        setUser(objUser)
      }
    } else {
      Alert.alert('Por favor, preencha todos os campos.')
    }

  }

  async function setUser(user: setUser) {
    api.post('', {
      setUser: true,
      user
    })
      .then(function (response) {
        setIsLoading(false)
        console.log(response.data)
        if (response.data) {
          navigation.navigate('Início')
        } else {
          Alert.alert('Erro ao tentar alterar usuário.')
        }
      })
      .catch(function (error) {
        setIsLoading(false)
        console.log(error)
        Alert.alert('Erro ao alterar usuário.')
      });
  }

  useEffect(() => {
    setName(user.name)
    setLogin(user.login)
    setEmail(user.email)
    setPhoneNumber(user.phoneNumber)
    setCpf(user.cpf)
    setDate(user.birth)
    setMotherName(user.motherName)
  }, [])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar barStyle="light-content" />
        {isLoading ?
          <LoadingContainer text="Alterando Dados" /> :
          <>
            <HeaderScreen text="Alterar Usuário" />

            <Header>
              <TextRegister>Alterar as informações do usuário.</TextRegister>
            </Header>
            <Body>
              <Form>
                <InputText
                  placeholder="Nome"
                  value={name}
                  onChangeText={setName}
                />
                <InputText
                  placeholder="Login"
                  value={login}
                  onChangeText={setLogin}
                />
                <InputText
                  placeholder="E-mail"
                  value={email}
                  onChangeText={setEmail}
                />
                <InputMask
                  type={'cel-phone'}
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  placeholder="Telefone"
                />
                <InputMask
                  type={'cpf'}
                  value={cpf}
                  onChangeText={setCpf}
                  placeholder="CPF"
                />
                <InputMask
                  type="datetime"
                  value={date}
                  onChangeText={setDate}
                  placeholder="Data de Nascimento"
                />
                <InputText
                  placeholder="Nome da Mãe"
                  value={motherName}
                  onChangeText={setMotherName}
                />
              </Form>
              <PrimaryButton text="Alterar" onPress={handleChangeUser} />
            </Body>

          </>
        }
      </Container>
    </TouchableWithoutFeedback>
  )
}