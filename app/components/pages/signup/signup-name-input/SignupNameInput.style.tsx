import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View`
  flex: 1;
  width: 330px;
  height: 58px;
  align-self: center;
  flex-direction: column;
`;

export const Content = styled.Text`
  width: 330px;
  height: 22px;
  margin-bottom: 8px;
  color: #000;
  font-size: ${Font.Size.XL};
  font-weight: 600;
  letter-spacing: 0.016px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#0000004d',
})`
  width: 330px;
  height: 32px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.3);
`;
