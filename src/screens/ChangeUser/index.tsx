import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';


import {
  Container
} from './styles';

import HeaderScreen from '../../components/HeaderScreen';
import AgeGroupCard from '../../components/AgeGroupCard';
import { api } from '../../services/api';
import LoadingContainer from '../../components/LoadingContainer';



export default function ChangeUser() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      {isLoading ?
        <LoadingContainer text="Buscando Dados" /> :
        <>
          <HeaderScreen text="Alterar Usuário" />


        </>
      }
    </Container>
  )
}