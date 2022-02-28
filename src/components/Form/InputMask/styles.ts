import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInputMask)`
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