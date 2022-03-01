import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface FilterProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  flex:1;
  background: ${({ theme }) => theme.colors.background};
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

export const PickerContainer = styled(Picker)`
  width: 100%;
  height: ${Platform.OS == 'ios' ? RFValue(160) : RFValue(30)}px;
  margin: ${Platform.OS == 'ios' ? 0 : RFValue(24)}px 0px;
  margin-bottom: ${Platform.OS == 'ios' ? RFValue(24) : RFValue(24)}px;
`;
export const Form = styled.ScrollView`
  padding: 0px ${RFValue(24)}px;
`;

export const Footer = styled.View`
  padding: 0px ${RFValue(24)}px;
  margin-bottom: ${getBottomSpace() + RFValue(24)}px;
`;