import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View`
  width: 330px;
  height: 147px;
  align-self: center;
  flex-direction: column;
`;

export const PasswordBox = styled.View`
  width: 330px;
  height: 58px;
  margin-bottom: 48px;
`;

export const PasswordContent = styled.Text`
  margin-bottom: 8px;
  color: #000;
  font-size: ${Font.Size.XL};
  font-weight: 600;
  letter-spacing: 0.016px;
`;

export const PasswordInputContainer = styled.View`
  width: 330px;
  height: 32px;
  flex-direction: row;
  align-self: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.3);
`;

export const PasswordImage = styled.View`
  width: 20px;
  height: 20px;
`;
export const PasswordInput = styled.TextInput.attrs({
  placeholderTextColor: '#0000004d',
})`
  width: 301px;
  height: 32px;
  margin-left: 9px;
  padding-top: 8px;
  padding-bottom: 8px;
`;
