import React, { useEffect, useState, useCallback } from 'react';
import { ActivityIndicator, Alert, StatusBar } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

import {
  Container, Header,
  UserInfo, UserGreeting,
  UserName, IconLogout,
  UserWrapper, Body,
  ListHeader, ListTitle,
  ButtonFilter, IconFilter,
  ButtonText, ListText,
  UserList, LoadContainer
} from './styles';
import { useAuth } from '../../hooks/auth';
import UserCard, { UserCardProps } from '../../components/UserCard';
import { api } from '../../services/api';
import { useTheme } from 'styled-components';
import { maskCPF, maskPhoneNumber } from '../../utils/mask';
import PrimaryButton from '../../components/PrimaryButton';


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<UserCardProps[]>([])

  const navigation = useNavigation<any>();
  const theme = useTheme();
  const { user, signOut } = useAuth()

  async function loadUsers() {
    setIsLoading(true)
    api.post('', {
      getUsersList: true,
    })
      .then(function (response) {
        setIsLoading(false)
        if (!response.data) {

        } else {
          const usersFormatted: UserCardProps[] = response.data
            .map((user: UserCardProps) => {
              user.cpf = maskCPF(user.cpf)
              user.phoneNumber = maskPhoneNumber(user.phoneNumber)
              return user
            })
          setUsers(usersFormatted)
        }
      })
      .catch(function (error) {
        setIsLoading(false)
        console.log(error)
        Alert.alert('Erro ao buscar lista de usuários.')
      });
  }

  useEffect(() => {
    loadUsers()
  }, [])

  useFocusEffect(useCallback(() => {
    loadUsers()
  }, []));

  function handleFilter() {
    console.log('filtro')
  }

  async function handleCancelAllUsers() {
    setIsLoading(true)
    api.post('', {
      cancelAllUsers: true,
      users
    })
      .then(function (response) {
        if (response.data) {
          loadUsers()
        } else {
          setIsLoading(false)
          Alert.alert('Erro ao tentar cancelar todos os usuários listados.')
        }
      })
      .catch(function (error) {
        setIsLoading(false)
        console.log(error)
        Alert.alert('Erro ao cancelar todos os usuários listados.')
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
          <Header>
            <UserWrapper>
              <UserInfo>
                <UserGreeting>Olá,</UserGreeting>
                <UserName>{user.userName}</UserName>
              </UserInfo>
              <IconLogout name="power" onPress={signOut} />
            </UserWrapper>
          </Header>
          <Body>
            <ListHeader>
              <ListTitle>Lista de Usuários</ListTitle>
              <ButtonFilter onPress={handleFilter}>
                <IconFilter name="filter" />
                <ButtonText>Filtro</ButtonText>
              </ButtonFilter>
            </ListHeader>
            <ListText>
              {users[0] == undefined ? 'Nenhum usuário encontrado.' : 'Clique em um usuário para altera-ló.'}
            </ListText>

            <UserList
              data={users}
              kerExtractor={(item) => item.id}
              renderItem={({ item }) => <UserCard data={item} />}
            />

            {users[0] == undefined ? <></> : <PrimaryButton text="Excluir Todos" onPress={handleCancelAllUsers} />}
          </Body>
        </>
      }
    </Container>
  )
}