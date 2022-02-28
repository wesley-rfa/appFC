import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  margin: 5px 0px;
  padding: 16px;
  width: 100%;
  height: ${RFValue(58)}px;
`;