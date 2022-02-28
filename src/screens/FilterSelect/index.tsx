import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';


import {
  Container
} from './styles';
import HeaderScreen from '../../components/HeaderScreen';
import LoadingContainer from '../../components/LoadingContainer';
import PrimaryButton from '../../components/PrimaryButton';

interface Filter {
  key: string;
  name: string;
}

interface Props {
  filter: Filter;
  setFilter: (filter: Filter) => void;
  closeFilterSelect: () => void;
}

export default function FilterSelect({
  filter,
  setFilter,
  closeFilterSelect
}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      {isLoading ?
        <LoadingContainer text="Filtrando" /> :
        <>
          <HeaderScreen text="Filtro" />
          <PrimaryButton text="filtrar" onPress={closeFilterSelect} />
        </>
      }
    </Container>
  )
}