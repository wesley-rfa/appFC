import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

interface FilterProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  flex:1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  height: ${RFValue(113)}px;
  background: ${({ theme }) => theme.colors.primary};
  padding: ${RFValue(50)}px 24px 0px 24px;
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

export const OptionsList = styled.FlatList`
  flex:1;
`;

export const OptionSelect = styled.TouchableOpacity<FilterProps>`
  width: 100%;
  padding: ${RFValue(10)}px ${RFValue(15)}px;
  flex-direction: row;
  background: ${({ theme, isActive }) => isActive ? theme.colors.primary_light : theme.colors.shape};
`;

export const OptionName = styled.Text<FilterProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, isActive }) => isActive ? theme.colors.shape : theme.colors.title};
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.colors.text};
`;

export const PickerContainer = styled.View`
  flex: 1;
  padding: ${RFValue(24)}px;
`;
export const Form = styled.ScrollView`
  flex: 1;

`;