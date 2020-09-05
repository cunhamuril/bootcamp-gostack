import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;

  margin-top: 8px;

  width: 100%;
  height: 60px;
  border-radius: 10px;

  background: #ff9000;
`;

export const ButtonText = styled.Text`
  font-size: 18px;

  color: #312e38;
  font-family: 'RobotoSlab-Medium';
`;
