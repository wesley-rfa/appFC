import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex:1;
  background: ${({ theme }) => theme.colors.green};
  justify-content: space-between;
  padding: 0 24px;
`;

export const SuccessArea = styled.View`
  flex:1;
  justify-content:center;
  align-items:center;
`;

export const SuccessIcon = styled(FontAwesome)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(60)}px;
    margin-bottom: ${RFValue(25)}px;
`;

export const SuccessTitle = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(30)}px;
    margin-bottom: ${RFValue(25)}px;
`;

export const SuccessText = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;

export const BackLoginButton = styled.TouchableOpacity`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.shape};
  margin: ${RFValue(50)}px 0px;
  height: ${RFValue(56)}px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.green};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
`;
