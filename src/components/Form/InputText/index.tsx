import React from 'react';
import { TextInputProps } from 'react-native';

import {
  Container
} from './styles';

type Props = TextInputProps;

export default function InputText({ ...rest }: Props) {
  return (
    <Container {...rest} />
  )
}