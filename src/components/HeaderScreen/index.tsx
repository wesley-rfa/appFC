import React from 'react';

import { Container, HeaderText } from './styles';

interface HeaderScreenProps {
  text: string
}

export default function HeaderScreen(props: HeaderScreenProps) {
  return (
    <Container>
      <HeaderText>{props.text}</HeaderText>
    </Container>
  )
}