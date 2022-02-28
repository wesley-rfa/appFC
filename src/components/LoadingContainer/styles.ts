import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const LoadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextActivity = styled.Text`
  margin-top: ${RFValue(14)}px; 
  font-size: ${RFValue(16)}px; 
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;