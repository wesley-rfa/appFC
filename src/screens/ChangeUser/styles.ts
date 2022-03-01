import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export const Container = styled.View`
  flex:1;
  background: ${({ theme }) => theme.colors.background};
  padding-bottom: ${RFValue(24)}px;
`;

export const Header = styled.View`
  height: ${Platform.OS == 'ios' ? RFValue(113) : RFValue(90)}px;
  background: ${({ theme }) => theme.colors.primary};
  padding: ${Platform.OS == 'ios' ? getStatusBarHeight() + 25 : 20}px 24px 0px 24px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const HeaderText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
  
`;
export const ButtonBack = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
export const IconBack = styled(MaterialIcons)`
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
export const DeleteLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Info = styled.View`
  margin: ${RFValue(21)}px 0px;
  padding: 0px ${RFValue(24)}px;
`;
export const TextRegister = styled.Text`
  font-size: ${RFValue(16)}px;  
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;
export const Body = styled.View`
  flex: 1;
  padding: 0px ${RFValue(24)}px;
  justify-content: space-between;
`;
export const Form = styled.ScrollView`
  
`;
