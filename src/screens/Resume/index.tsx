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
  percent: string;
  color: string;
}

interface objChart {
  x: string;
  y: number;
  color: string;
}

export default function Resume() {
  const [isLoading, setIsLoading] = useState(true);
  const [ageGroup, setAgeGroup] = useState<AgeGroupProps[]>([])
  const [objChart, setObjChart] = useState<objChart[]>([])

  const obj: objChart[] = []

  async function loadResume() {
    api.post('', {
      resumeAgeGroup: true
    })
      .then(function (response) {
        if (response.data) {
          setIsLoading(false)
          const ageGroupFormatted: AgeGroupProps[] = response.data
            .map((group: AgeGroupProps) => {
              if (group.amount > 0) {
                obj.push({
                  x: group.percent,
                  y: group.amount,
                  color: group.color
                })
              }

              return group
            })
          setAgeGroup(ageGroupFormatted)
          setObjChart(obj)
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
                data={objChart}
                colorScale={objChart.map(category => category.color)}
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