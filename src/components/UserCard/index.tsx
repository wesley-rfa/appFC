import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container, Header,
  User, IconUser,
  UserName, UserBirth,
  Details, Email,
  PhoneNumber, Cpf,
  Footer
} from './styles';

export interface UserCardProps {
  id: string;
  name: string;
  login: string;
  birth: string;
  email: string;
  phoneNumber: string;
  cpf: string;
  motherName: string;
  status: 'ATIVO' | 'CANCELADO';
}

interface Props extends TouchableOpacityProps {
  data: UserCardProps;
}

export default function UserCard({ data, onPress }: Props) {
  return (
    <Container status={data.status} onPress={onPress}>
      <Header>
        <User>
          <IconUser name="user-alt" />
          <UserName>{data.name}</UserName>
        </User>
      </Header>
      <Details>
        <Email>{data.email}</Email>
        <PhoneNumber>{data.phoneNumber}</PhoneNumber>
        <Footer>
          <Cpf>{data.cpf}</Cpf>
          <UserBirth>{data.birth}</UserBirth>
        </Footer>
      </Details>
    </Container>
  )
}