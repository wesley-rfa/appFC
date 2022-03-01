import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  height: ${Platform.OS == 'ios' ? RFPercentage(15) : RFPercentage(12)}px;
  background: ${({ theme }) => theme.colors.primary};
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
  margin-top: ${Platform.OS == 'ios' ? RFValue(60) : RFValue(40)}px;
`;