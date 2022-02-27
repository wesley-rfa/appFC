import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  Container, Header,
  UserInfo, UserGreetting,
  UserName, IconLogout,
  UserWrapper
} from './styles';
import { useAuth } from '../../hooks/auth';

export default function Home() {
  const navigation = useNavigation<any>();
  const { user } = useAuth()

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserGreetting>Olá,</UserGreetting>
            <UserName>{user.userName}</UserName>
          </UserInfo>
          <IconLogout name="power" />
        </UserWrapper>
      </Header>
    </Container>
  )
}