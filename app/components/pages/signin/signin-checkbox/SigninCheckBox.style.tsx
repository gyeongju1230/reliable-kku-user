import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View`
  align-items: center;
`;
export const CheckContainer = styled.View`
  width: 352px;
  flex-direction: row;
`;
export const CheckBox = styled.Text`
  color: #000;
  font-size: ${Font.Size.L};
  font-weight: 500;
  margin-left: 8px;
`;
