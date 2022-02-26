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
`;

export const UserName = styled.TextInput`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title};
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;
    margin: 18px 0px;
    padding: 16px;
    width: 100%;
    height: ${RFValue(58)}px;

`;
export const UserBirthDate = styled.TextInput`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title};
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;
    margin: 0px;
    padding: 16px;
    width: 100%;
    height: ${RFValue(58)}px;
`;

export const UserCPF = styled.TextInput`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title};
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;
    margin: 18px 0px;
    padding: 16px;
    width: 100%;
    height: ${RFValue(58)}px;
`;

