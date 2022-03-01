import styled from 'styled-components/native';
import { FlatList, Platform } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { UserCardProps } from '../../components/UserCard';

export const Container = styled.View`
  flex:1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  height: ${Platform.OS == 'ios' ? RFValue(113) : RFValue(90)}px;
  background: ${({ theme }) => theme.colors.primary};
  padding: 0px ${RFValue(24)}px ${RFValue(7)}px ${RFValue(24)}px;
  
  
`;

export const UserWrapper = styled.View`
  margin-top: ${Platform.OS == 'ios' ? getStatusBarHeight() + 25 : 20}px;
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

export const Body = styled.View`
    flex: 1;
    padding: ${RFValue(24)}px;
`;
export const ListHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const ListTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`;

export const ButtonFilter = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const IconFilter = styled(FontAwesome5)`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.primary};
  margin-right: ${RFValue(5)}px;
`;
export const ButtonText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
`;

export const ListText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  margin: ${RFValue(10)}px 0px;
`;

export const UserList = styled(
  FlatList as new () => FlatList<UserCardProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  }
})`
`;