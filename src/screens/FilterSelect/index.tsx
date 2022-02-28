import React, { useEffect, useState } from 'react';
import { Alert, StatusBar, TouchableOpacity } from 'react-native';


import {
  Container, Header,
  ButtonBack, IconBack,
  HeaderText, DeleteLabel,
  OptionsList,
  OptionSelect, Form,
  OptionName, Separator
} from './styles';

import LoadingContainer from '../../components/LoadingContainer';
import { filtersSelectOptions } from '../../utils/filterSelectOptions';
import InputText from '../../components/Form/InputText';
import InputMask from '../../components/Form/InputMask';

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
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [cpf, setCpf] = useState('');

  function handleFilterSelect(filterSelect: Filter) {
    setFilter(filterSelect)
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      {isLoading ?
        <LoadingContainer text="Filtrando" /> :
        <>
          <Header>
            <ButtonBack onPress={closeFilterSelect}>
              <IconBack name="chevron-left" />
            </ButtonBack>
            <HeaderText>Selecione um Filtro</HeaderText>
            <TouchableOpacity onPress={closeFilterSelect}>
              {filter.key !== '0' && <DeleteLabel>Filtrar</DeleteLabel>}
            </TouchableOpacity>
          </Header>

          <OptionsList
            data={filtersSelectOptions}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <OptionSelect
                onPress={() => handleFilterSelect(item)}
                isActive={filter.key === item.key}
              >
                <OptionName isActive={filter.key === item.key}>{item.option}</OptionName>
              </OptionSelect>
            )}
            ItemSeparatorComponent={() => <Separator />}
          />

          <Form>

            {filter.key == '1' &&
              <InputText
                placeholder="Nome"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
              />
            }

            {filter.key == '2' &&
              <InputMask
                type={'cpf'}
                value={cpf}
                onChangeText={setCpf}
                placeholder="CPF"
              />
            }
            {filter.key == '3' &&
              <InputText
                placeholder="Login"
                value={login}
                onChangeText={setLogin}
              />
            }
          </Form>


        </>
      }
    </Container>
  )
}