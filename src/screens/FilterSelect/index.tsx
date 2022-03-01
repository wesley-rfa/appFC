import React, { useEffect, useState } from 'react';
import { Alert, StatusBar, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import {
  Container, Header,
  ButtonBack, IconBack,
  HeaderText, DeleteLabel,
  OptionsList, PickerContainer,
  OptionSelect, Form,
  OptionName, Separator
} from './styles';

import LoadingContainer from '../../components/LoadingContainer';
import { filtersSelectOptions } from '../../utils/filterSelectOptions';
import InputText from '../../components/Form/InputText';
import InputMask from '../../components/Form/InputMask';
import { ageGroupOptions } from '../../utils/ageGroupOptions';

interface Filter {
  key: string;
  option: string;
}

interface Props {
  filter: Filter;
  setFilter: (filter: Filter) => void;

  nameFilter: string;
  setNameFilter: (name: string) => void;

  cpfFilter: string;
  setCpfFilter: (cpf: string) => void;

  loginFilter: string;
  setLoginFilter: (login: string) => void;

  statusFilter: string;
  setStatusFilter: (login: string) => void;

  dateBeginFilter: string;
  setDateBeginFilter: (login: string) => void;

  dateEndFilter: string;
  setDateEndFilter: (login: string) => void;

  idAgeGroupFilter: string;
  setIdAgeGroupFilter: (login: string) => void;

  closeFilterSelect: () => void;
  closeFilterSelectWithFilter: () => void;
}

export default function FilterSelect({
  filter,
  setFilter,

  nameFilter,
  setNameFilter,

  cpfFilter,
  setCpfFilter,

  loginFilter,
  setLoginFilter,

  statusFilter,
  setStatusFilter,

  dateBeginFilter,
  setDateBeginFilter,

  dateEndFilter,
  setDateEndFilter,

  idAgeGroupFilter,
  setIdAgeGroupFilter,

  closeFilterSelect,
  closeFilterSelectWithFilter
}: Props) {

  const [isLoading, setIsLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState(filter.key);
  function handlePicker(value: string) {
    setSelectedValue(value)
    const filterSelected: Filter[] = filtersSelectOptions.filter((option) => { return option.key === value })
    setFilter(filterSelected[0])
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
            <TouchableOpacity onPress={closeFilterSelectWithFilter}>
              <DeleteLabel>Filtrar</DeleteLabel>
            </TouchableOpacity>
          </Header>

          <PickerContainer>
            <Picker
              style={{ width: "100%", height: 50 }}
              selectedValue={selectedValue}
              onValueChange={(itemValue) => handlePicker(itemValue)}
            >
              {filtersSelectOptions.map((item) =>
                <Picker.Item label={item.option} value={item.key} key={item.key} />
              )}

            </Picker>
          </PickerContainer>


          <Form>

            {filter.key == '1' &&
              <InputText
                placeholder="Nome"
                value={nameFilter}
                onChangeText={setNameFilter}
                autoCapitalize="words"
              />
            }

            {filter.key == '2' &&
              <InputMask
                type={'cpf'}
                value={cpfFilter}
                onChangeText={setCpfFilter}
                placeholder="CPF"
              />
            }
            {filter.key == '3' &&
              <InputText
                placeholder="Login"
                value={loginFilter}
                onChangeText={setLoginFilter}
              />
            }
            {filter.key == '4' &&
              <Picker
                selectedValue={statusFilter}
                onValueChange={(itemValue) => setStatusFilter(itemValue)}
              >
                <Picker.Item label="ATIVO" value="ATIVO" />
                <Picker.Item label="CANCELADO" value="CANCELADO" />

              </Picker>
            }
            {(filter.key == '5' || filter.key == '6' || filter.key == '7') &&
              <>
                <InputMask
                  type="datetime"
                  value={dateBeginFilter}
                  onChangeText={setDateBeginFilter}
                  placeholder="Data de Início"
                />
                <InputMask
                  type="datetime"
                  value={dateEndFilter}
                  onChangeText={setDateEndFilter}
                  placeholder="Data de Fim"
                />
              </>

            }
            {filter.key == '8' &&
              <Picker
                selectedValue={idAgeGroupFilter}
                onValueChange={(itemValue) => setIdAgeGroupFilter(itemValue)}
              >
                {ageGroupOptions.map((item) =>
                  <Picker.Item label={item.option} value={item.key} key={item.key} />
                )}

              </Picker>
            }
          </Form>


        </>
      }
    </Container>
  )
}