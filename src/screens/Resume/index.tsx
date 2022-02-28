import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';

import {
  Container, Content
} from './styles';
import HeaderScreen from '../../components/HeaderScreen';
import AgeGroupCard from '../../components/AgeGroupCard';
import { api } from '../../services/api';

interface AgeGroupProps {
  idAgeGroup: string;
  ageGroup: string;
  amount: number;
  color: string;
}

export default function Resume() {
  const [ageGroup, setAgeGroup] = useState<AgeGroupProps[]>([])

  async function loadResume() {
    api.post('', {
      resumeAgeGroup: true
    })
      .then(function (response) {
        if (response.data) {
          const ageGroupFormatted: AgeGroupProps[] = response.data
            .map((group: AgeGroupProps) => {
              return group
            })
          setAgeGroup(ageGroupFormatted)
          console.log(ageGroup)
        }
      })
      .catch(function (error) {
        console.log(error)
        Alert.alert('Erro ao buscar resumo por faixa etária.')
      });
  }

  useEffect(() => {
    loadResume()
  }, [])

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <HeaderScreen text="Resumo Por Faixa Etária" />

      <Content >
        {
          ageGroup.map(item => (
            <AgeGroupCard
              key={item.idAgeGroup}
              title={item.ageGroup}
              amount={item.amount}
              color={item.color}
            />
          ))
        }
      </Content>

    </Container>
  )
}