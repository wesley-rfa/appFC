import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import {
  Container
} from './styles';

type Props = TextInputProps;

export default function InputText({ ...rest }: Props) {
  const theme = useTheme();
  return (
    <Container {...rest} placeholderTextColor={theme.colors.text} />
  )
}