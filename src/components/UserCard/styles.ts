import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { FontAwesome5 } from '@expo/vector-icons';

interface UserStatusProps {
  status: 'ATIVO' | 'CANCELADO';
}

export const Container = styled.TouchableOpacity<UserStatusProps>`
  background: ${({ theme }) => theme.colors.shape};
  padding: ${RFValue(17)}px;
  border-radius: ${RFValue(5)}px;
  margin: 7.5px 0px; 
  opacity: ${({ status }) => status == 'ATIVO' ? 1 : 0.5};
`;

export const Header = styled.View`
  flex-direction:row;
  align-items: center;
  justify-content: space-between;
`;
export const User = styled.View`
  flex-direction:row;
  align-items: center;
`;
export const IconUser = styled(FontAwesome5)`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.title};
  margin-right: ${RFValue(5)}px;
`;
export const UserName = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
`;
export const UserBirth = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Details = styled.View`
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Email = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin: ${RFValue(5)}px 0px;
`;

export const PhoneNumber = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: ${RFValue(5)}px;
`;

export const Cpf = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TrashIcon = styled(FontAwesome5)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.primary};
`;