import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  Container
} from './styles';

export default function Login() {
  const navigation = useNavigation<any>();



  return (
    <Container>
      <StatusBar barStyle="dark-content" />

    </Container>
  )
}