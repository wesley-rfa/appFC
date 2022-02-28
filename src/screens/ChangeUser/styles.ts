import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
  flex:1;
  background: ${({ theme }) => theme.colors.background};
  padding-bottom: ${RFValue(24)}px;
`;

export const Header = styled.View`
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
