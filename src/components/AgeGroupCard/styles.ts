import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  color: string;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  background: ${({ theme }) => theme.colors.shape};

  flex-direction: row;
  justify-content: space-between;

  padding: ${RFValue(13)}px ${RFValue(24)}px;

  border-radius: ${RFValue(5)}px;
  border-left-width: ${RFValue(5)}px;
  border-left-color: ${({ color }) => color};

  margin-bottom: ${RFValue(8)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;