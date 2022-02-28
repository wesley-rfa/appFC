import React from 'react';
import { TextInputMaskProps } from 'react-native-masked-text';

import {
  Container
} from './styles';

interface inputProps {
  value: string;
  onChangeText(): any;
}

export default function InputPhone({ value, onChangeText }: TextInputMaskProps) {
  return (
    <Container
      type={'cel-phone'}
      options={{
        maskType: 'BRL',
        withDDD: true,
        dddMask: '(99) '
      }}
      value={value}
      onChangeText={onChangeText}
    />
  )
}