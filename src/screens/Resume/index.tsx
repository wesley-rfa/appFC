import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';

import { VictoryPie } from 'victory-native';

import {
  Container, Content,
  ChartContainer
} from './styles';
import HeaderScreen from '../../components/HeaderScreen';
import AgeGroupCard from '../../components/AgeGroupCard';
import { api } from '../../services/api';
import LoadingContainer from '../../components/LoadingContainer';

interface AgeGroupProps {
  idAgeGroup: string;
  ageGroup: string;
  amount: number;
  color: string;
}

export default function Resume() {
  const [isLoading, setIsLoading] = useState(true);
  const [ageGroup, setAgeGroup] = useState<AgeGroupProps[]>([])

  async function loadResume() {
    api.post('', {
      resumeAgeGroup: true
    })
      .then(function (response) {
        if (response.data) {
          setIsLoading(false)
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
        setIsLoading(false)
        Alert.alert('Erro ao buscar resumo por faixa etária.')
      });
  }

  useEffect(() => {
    loadResume()
  }, [])

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      {isLoading ?
        <LoadingContainer text="Buscando Dados" /> :
        <>
          <HeaderScreen text="Resumo Por Faixa Etária" />

          <Content >
            <ChartContainer>
              <VictoryPie
                data={ageGroup}
                x={ageGroup.ageGroup}
                y={ageGroup.amount}
              />
            </ChartContainer>

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
        </>
      }
    </Container>
  )
}