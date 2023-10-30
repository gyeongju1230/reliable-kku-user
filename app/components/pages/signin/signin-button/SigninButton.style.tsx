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

export const ErrorMessage = styled.Text`
  position: absolute;
  right: 0;
  color: #f00;
  font-size: ${Font.Size.S};
  font-weight: 500;
  line-height: 14px;
`;

export const SigninButtonTop = styled.View`
  height: 45px;
`;
