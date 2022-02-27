import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  Container
} from './styles';
import HeaderScreen from '../../components/HeaderScreen';

export default function Resume() {
  const navigation = useNavigation<any>();



  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <HeaderScreen text="Resumo Por Faixa Etária" />
    </Container>
  )
}