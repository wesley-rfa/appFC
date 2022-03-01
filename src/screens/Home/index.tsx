import React, { useEffect, useState, useCallback } from 'react';
import { Alert, StatusBar, Modal } from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

import {
  Container, Header,
  UserInfo, UserGreeting,
  UserName, IconLogout,
  UserWrapper, Body,
  ListHeader, ListTitle,
  ButtonFilter, IconFilter,
  ButtonText, ListText,
  UserList
} from './styles';
import { useAuth } from '../../hooks/auth';
import UserCard, { UserCardProps } from '../../components/UserCard';
import { api } from '../../services/api';
import { formatDate, maskCPF, maskPhoneNumber } from '../../utils/mask';
import PrimaryButton from '../../components/PrimaryButton';
import LoadingContainer from '../../components/LoadingContainer';
import FilterSelect from '../FilterSelect';


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const [nameFilter, setNameFilter] = useState('');
  const [loginFilter, setLoginFilter] = useState('');
  const [cpfFilter, setCpfFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('ATIVO');
  const [dateBeginFilter, setDateBeginFilter] = useState('');
  const [dateEndFilter, setDateEndFilter] = useState('');
  const [idAgeGroupFilter, setIdAgeGroupFilter] = useState('1');

  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [filter, setFilter] = useState({
    key: '0',
    option: '',
  });
  const [users, setUsers] = useState<UserCardProps[]>([])

  const navigation = useNavigation<any>();
  const { user, signOut } = useAuth()

  async function loadUsers() {
    const objFilter = {
      name: nameFilter,
      cpf: cpfFilter.replace(/-/g, "").replace(/\./g, ""),
      login: loginFilter,
      status: statusFilter,
      dateBegin: formatDate(dateBeginFilter),
      dateEnd: formatDate(dateEndFilter),
      idAgeGroup: idAgeGroupFilter,
      keyFilter: filter.key,
    }
    setIsLoading(true)
    api.post('', {
      getUsersList: true,
      objFilter
    })
      .then(function (response) {
        setIsLoading(false)
        if (!response.data) {

        } else {
          const usersFormatted: UserCardProps[] = response.data
            .map((user: UserCardProps) => {
              user.cpf = maskCPF(user.cpf)
              user.phoneNumber = maskPhoneNumber(user.phoneNumber)
              return user
            })
          setUsers(usersFormatted)
        }
      })
      .catch(function (error) {
        setIsLoading(false)
        console.log(error)
        Alert.alert('Erro ao buscar lista de usuários.')
      });
  }

  useEffect(() => {
    loadUsers()
  }, [])

  useFocusEffect(useCallback(() => {
    loadUsers()
  }, []));

  function handleFilterModal() {
    setFilterModalOpen(true)
  }

  function handleChangeUser(user: UserCardProps) {
    navigation.navigate('ChangeUser', user)
  }

  async function handleCancelAllUsers() {
    setIsLoading(true)
    api.post('', {
      cancelAllUsers: true,
      users
    })
      .then(function (response) {
        if (response.data) {
          loadUsers()
        } else {
          setIsLoading(false)
          Alert.alert('Erro ao tentar cancelar todos os usuários listados.')
        }
      })
      .catch(function (error) {
        setIsLoading(false)
        console.log(error)
        Alert.alert('Erro ao cancelar todos os usuários listados.')
      });
  }

  function handleCloseFilterSelect() {
    setFilterModalOpen(false)
  }
  function handleCloseFilterSelectFilter() {
    setFilterModalOpen(false)
    loadUsers()
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      {isLoading ?
        <LoadingContainer text="Buscando Usuários" /> :
        <>
          <Header>
            <UserWrapper>
              <UserInfo>
                <UserGreeting>Olá,</UserGreeting>
                <UserName>{user.userName}</UserName>
              </UserInfo>
              <IconLogout name="power" onPress={signOut} />
            </UserWrapper>
          </Header>
          <Body>
            <ListHeader>
              <ListTitle>Lista de Usuários</ListTitle>
              <ButtonFilter onPress={handleFilterModal}>
                <IconFilter name="filter" />
                <ButtonText>Filtro</ButtonText>
              </ButtonFilter>
            </ListHeader>
            <ListText>
              {users[0] == undefined ? 'Nenhum usuário encontrado.' : 'Clique em um usuário para altera-ló.'}
            </ListText>

            <UserList
              data={users}
              kerExtractor={(item) => item.id}
              renderItem={({ item }) => <UserCard data={item} onPress={() => handleChangeUser(item)} />}
            />

            {users[0] == undefined ? <></> : <PrimaryButton text="Excluir Todos" onPress={handleCancelAllUsers} />}
          </Body>

          <Modal visible={filterModalOpen}>
            <FilterSelect
              filter={filter}
              setFilter={setFilter}

              nameFilter={nameFilter}
              setNameFilter={setNameFilter}

              loginFilter={loginFilter}
              setLoginFilter={setLoginFilter}

              cpfFilter={cpfFilter}
              setCpfFilter={setCpfFilter}

              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}

              dateBeginFilter={dateBeginFilter}
              setDateBeginFilter={setDateBeginFilter}

              dateEndFilter={dateEndFilter}
              setDateEndFilter={setDateEndFilter}

              idAgeGroupFilter={idAgeGroupFilter}
              setIdAgeGroupFilter={setIdAgeGroupFilter}

              closeFilterSelect={handleCloseFilterSelect}
              closeFilterSelectWithFilter={handleCloseFilterSelectFilter}
            />
          </Modal>
        </>
      }
    </Container>
  )
}