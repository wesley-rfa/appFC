import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.TouchableOpacity`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: ${RFValue(33)}px;
  height: ${RFValue(56)}px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
`;

