import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View`
  align-items: center;
`;
export const SigninBox = styled.View`
  width: 352px;
  height: 48px;
  justify-content: center;
  border-radius: 6px;
  background: #ffca42;
`;
export const SigninButton = styled.Text`
  padding: 17px 0 17px;
  color: #000;
  text-align: center;
  font-size: ${Font.Size.XL};
  font-weight: 600;
  line-height: 14px;
`;
