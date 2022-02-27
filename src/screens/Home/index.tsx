import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  Container, Header,
  UserInfo, UserGreeting,
  UserName, IconLogout,
  UserWrapper, Body,
  ListHeader, ListTitle,
  ButtonFilter, IconFilter,
  ButtonText, ListText,
  UserList
} from './styles';
import { useAuth } from '../../hooks/auth';
import UserCard, { UserCardProps } from '../../components/UserCard';


export default function Home() {
  const navigation = useNavigation<any>();
  const { user, signOut } = useAuth()


  const data: UserCardProps[] = [
    {
      id: '1',
      name: 'Wesley',
      birth: '28/07/1997',
      email: 'wesleyaraujo@cc.ci.ufpb.br',
      phoneNumber: '(83) 99178-4922',
      cpf: '079.038.504.07',
      status: 'ATIVO',
    },
    {
      id: '2',
      name: 'Wesley',
      birth: '28/07/1997',
      email: 'wesleyaraujo@cc.ci.ufpb.br',
      phoneNumber: '(83) 99178-4922',
      cpf: '079.038.504.07',
      status: 'CANCELADO',
    }
  ]

  function handleFilter() {
    console.log('filtro')
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />
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
        <ListText>Clique em um usuário para altera-ló.</ListText>

        <UserList
          data={data}
          kerExtractor={(item) => item.id}
          renderItem={({ item }) => <UserCard data={item} />}
        />

      </Body>
    </Container>
  )
}