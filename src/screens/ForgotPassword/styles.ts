import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex:1;
  background: ${({ theme }) => theme.colors.background};
`;

export const ForgotArea = styled.View`
  padding: 0 ${RFValue(24)}px;
`;

export const ForgotTitle = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary};
  margin-top: ${RFValue(37)}px;
  margin-bottom: ${RFValue(14)}px;
`;

export const ForgotText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${RFValue(20)}px;
`;

