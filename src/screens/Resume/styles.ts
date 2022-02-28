import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex:1;
  background: ${({ theme }) => theme.colors.background};
`;
export const Content = styled.ScrollView.attrs({
  contentContainerStyle: { flex: 1, padding: 24 }
})``;