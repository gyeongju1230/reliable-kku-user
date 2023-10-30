import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View`
  width: 84.7328244%;
  align-self: center;
  border-radius: 6px;
  overflow: hidden;
  justify-content: flex-start;
`;

export const Text = styled.Text`
  text-align: left;
  color: #000;
  font-size: ${Font.Size.XXL};
  font-weight: 600;
  letter-spacing: 0.02px;
`;
