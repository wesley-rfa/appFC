import React from 'react';

import {
  Container, Header,
  User, IconUser,
  UserName, UserBirth,
  Details, Email,
  PhoneNumber, Cpf,
  Footer, TrashIcon
} from './styles';

export interface UserCardProps {
  id: string;
  name: string;
  birth: string;
  email: string;
  phoneNumber: string;
  cpf: string;
  status: 'ATIVO' | 'CANCELADO';
}

interface Props {
  data: UserCardProps;

}

export default function UserCard({ data }: Props) {
  return (
    <Container status={data.status}>
      <Header>
        <User>
          <IconUser name="user-alt" />
          <UserName>{data.name}</UserName>
        </User>
        <UserBirth>{data.birth}</UserBirth>
      </Header>
      <Details>
        <Email>{data.email}</Email>
        <PhoneNumber>{data.phoneNumber}</PhoneNumber>
        <Footer>
          <Cpf>{data.cpf}</Cpf>
          {data.status == 'ATIVO' && <TrashIcon name="trash" />}
        </Footer>
      </Details>
    </Container>
  )
}