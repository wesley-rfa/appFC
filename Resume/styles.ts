import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex:1;
  background: ${({ theme }) => theme.colors.background};
`;

export const ChartContainer = styled.View`
  width:100%;
  padding: 0px 24px;
  margin-top: -${RFValue(30)}px;
  align-items: center;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 24 }
})`
`;