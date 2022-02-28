import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex:1;
  background: ${({ theme }) => theme.colors.background};
`;

export const LogoArea = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: ${getStatusBarHeight() + RFValue(150)}px;
    margin-bottom: ${RFValue(33)}px;
`;

export const SignInArea = styled.View`
    width: 100%;
    padding: 0px 24px;
    margin-top: ${RFValue(36)}px;
`;

export const TitleLogin = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary};
`;

export const TextInfo = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const ForgotPassword = styled.View`
    align-items: flex-end;
`;
export const ForgotText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.primary};
`

export const SignInButton = styled.TouchableOpacity`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: ${RFValue(33)}px;
  height: ${RFValue(56)}px;

  justify-content: center;
  align-items: center;
`;

export const SendText = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(16)}px;
`;

