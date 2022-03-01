import React, { useState } from 'react';
import { Alert, Keyboard, StatusBar, TouchableWithoutFeedback } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  Container, Header,
  TextRegister, Body,
  Form
} from './styles';

import HeaderScreen from '../../components/HeaderScreen';
import PrimaryButton from '../../components/PrimaryButton';
import InputMask from '../../components/Form/InputMask';
import InputText from '../../components/Form/InputText';
import LoadingContainer from '../../components/LoadingContainer';

import { api } from '../../services/api';
import { formatDate } from '../../utils/mask';
import { ValidaCPF } from '../../utils/validaCPF';
interface newUser {
  name: string;
  login: string;
  password: string;
  email: string;
  motherName: string;
  cpf: string;
  phoneNumber: string;
  dateBirth: string;
}

export default function UserRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cpf, setCpf] = useState('');
  const [date, setDate] = useState('');
  const [motherName, setMotherName] = useState('');

  const navigation = useNavigation<any>();

  function verifyEmptyInputs() {
    if (name == '' || login == '' || password == '' || repeatPassword == ''
      || email == '' || phoneNumber == '' || cpf == '' || date == '' || motherName == '') {
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

  function verifySamePassword() {
    if (password == repeatPassword) {
      return true
    } else {
      Alert.alert('As senhas não correspondem.')
      return false
    }

  }

  function handleRegisterNewUser() {
    const cpfValidation = new ValidaCPF(cpf);
    if (verifyEmptyInputs()) {
      if (cpfValidation.valida()) {
        setIsLoading(true)
        if (verifyInputs() && verifySamePassword()) {
          const newUser = {
            name,
            login,
            password,
            email,
            motherName,
            cpf: cpf.replace(/-/g, "").replace(/\./g, ""),
            phoneNumber: phoneNumber.replace(/\D/g, ""),
            dateBirth: formatDate(date)
          }
          registerNewUser(newUser)
        }
      } else {
        Alert.alert('CPF inválido.')
      }
    } else {
      Alert.alert('Por favor, preencha todos os campos.')
    }

  }

  async function registerNewUser(newUser: newUser) {
    api.post('', {
      newUser,
    })
      .then(function (response) {
        setIsLoading(false)
        if (parseInt(response.data) == 1) {
          navigation.navigate('Início')
        } else if (parseInt(response.data) == 1) {
          Alert.alert('Erro ao tentar cadastrar novo usuário. Por favor, tente novamente.')
        } else if (parseInt(response.data) == -1) {
          Alert.alert('Esse nome de usuário já existe. Por favor, informe outro.')
        }
      })
      .catch(function (error) {
        console.log(error)
        setIsLoading(false)
        Alert.alert('Erro ao cadastrar novo usuário. Por favor, tente novamente.')
      });
  }



  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar barStyle="light-content" />
        {isLoading ?
          <LoadingContainer text="Salvando Usuário" /> :
          <>

            <HeaderScreen text="Cadastro de Usuário" />
            <Header>
              <TextRegister>Para cadastrar um novo usuário preencha os campos abaixo.</TextRegister>
            </Header>
            <Body>
              <Form showsVerticalScrollIndicator={false}>
                <InputText
                  placeholder="Nome"
                  value={name}
                  onChangeText={setName}
                  autoCapitalize="words"
                />
                <InputText
                  placeholder="Login"
                  value={login}
                  onChangeText={setLogin}
                />
                <InputText
                  placeholder="Senha"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={true}
                />
                <InputText
                  placeholder="Repita a Senha"
                  value={repeatPassword}
                  onChangeText={setRepeatPassword}
                  secureTextEntry={true}
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
              <PrimaryButton text="Confirmar" onPress={handleRegisterNewUser} />
            </Body>

          </>
        }
      </Container >
    </TouchableWithoutFeedback>
  )
}