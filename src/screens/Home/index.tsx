import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  Container, Header,
  UserInfo, UserGreeting,
  UserName, IconLogout,
  UserWrapper
} from './styles';
import { useAuth } from '../../hooks/auth';

export default function Home() {
  const navigation = useNavigation<any>();
  const { user, signOut } = useAuth()

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
    </Container>
  )
}