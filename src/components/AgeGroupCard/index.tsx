import React from 'react';

import {
  Container, Title,
  Amount
} from './styles';

interface Props {
  title: string;
  amount: number;
  color: string;
}

export default function AgeGroupCard({ title, amount, color }: Props) {

  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  )
}