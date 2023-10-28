import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View`
  width: 330px;
  height: 44px;
  align-self: center;
  justify-content: center;
  border-radius: 6px;
  background: #ffca42;
`;

export const Content = styled.Text`
  color: #000;
  text-align: center;
  font-size: ${Font.Size.XL};
  font-weight: 600;
`;
