import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex:1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  height: ${RFValue(113)}px;
  background: ${({ theme }) => theme.colors.primary};
  padding: 0px ${RFValue(24)}px ${RFValue(7)}px ${RFValue(24)}px;
  
  
`;

export const UserWrapper = styled.View`
  margin-top: ${getStatusBarHeight() + 25}px;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
`;

export const UserInfo = styled.View`
`;

export const UserGreeting = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`;
export const UserName = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
`;
export const IconLogout = styled(Feather)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(24)}px;
`;