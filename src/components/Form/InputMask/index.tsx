import React from 'react';
import { TextInputMaskProps } from 'react-native-masked-text';

import {
  Container
} from './styles';


export default function InputMask({
  type, placeholder, value, onChangeText
}: TextInputMaskProps) {
  return (
    <Container
      type={type}
      options={{
        maskType: 'BRL',
        withDDD: true,
        dddMask: '(99) ',
        format: 'DD/MM/YYYY'
      }}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  )
}