import React, { useEffect, useState } from 'react';
import {
  Alert, Keyboard,
  StatusBar, TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';




import {
  Container, Header,
  HeaderText, ButtonBack,
  TextRegister, Body,
  Form, Info, DeleteLabel,
  IconBack
} from './styles';

import { api } from '../../services/api';
import LoadingContainer from '../../components/LoadingContainer';
import InputText from '../../components/Form/InputText';
import InputMask from '../../components/Form/InputMask';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation, soute, useRoute } from '@react-navigation/native';
import { UserCardProps } from '../../components/UserCard';
import { formatDate } from '../../utils/mask';
import { useAuth } from '../../hooks/auth';

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
  const { user } = useAuth()
  const userRoute = route.params as UserCardProps;

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
          id: userRoute.id,
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
  function handleCancelUser() {
    setIsLoading(true)
    api.post('', {
      cancelUser: true,
      id: userRoute.id
    })
      .then(function (response) {
        setIsLoading(false)
        console.log(response.data)
        if (response.data) {
          navigation.navigate('Início')
        } else {
          Alert.alert('Erro ao tentar cancelar usuário.')
        }
      })
      .catch(function (error) {
        setIsLoading(false)
        console.log(error)
        Alert.alert('Erro ao cancelar usuário.')
      });

  }

  async function setUser(userChange: setUser) {
    console.log(userRoute)
    api.post('', {
      setUser: true,
      user: userChange
    })
      .then(function (response) {
        setIsLoading(false)
        console.log(response.data)
        if (response.data == -1) {
          Alert.alert('Login já existe.')
        } else if (response.data == 1) {
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
    setName(userRoute.name)
    setLogin(userRoute.login)
    setEmail(userRoute.email)
    setPhoneNumber(userRoute.phoneNumber)
    setCpf(userRoute.cpf)
    setDate(userRoute.birth)
    setMotherName(userRoute.motherName)
  }, [])

  function goBack() {
    navigation.goBack()
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar barStyle="light-content" />
        {isLoading ?
          <LoadingContainer text="Alterando Dados" /> :
          <>
            <Header>
              <ButtonBack onPress={goBack}>
                <IconBack name="chevron-left" />
              </ButtonBack>
              <HeaderText>Alterar Usuário</HeaderText>
              <TouchableOpacity onPress={handleCancelUser}>
                <DeleteLabel>{userRoute.status == 'ATIVO' && parseInt(userRoute.id) != user.id ? 'Excluir' : ''}</DeleteLabel>
              </TouchableOpacity>
            </Header>

            <Info>
              <TextRegister>Altere as informações do usuário.</TextRegister>
            </Info>
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
              {userRoute.status == 'ATIVO' ? <PrimaryButton text="Alterar" onPress={handleChangeUser} /> : <></>}
            </Body>

          </>
        }
      </Container>
    </TouchableWithoutFeedback>
  )
}