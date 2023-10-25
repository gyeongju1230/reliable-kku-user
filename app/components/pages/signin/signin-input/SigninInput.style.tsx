import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const InputBox = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#0000004d',
})`
  width: 352px;
  height: 48px;
  margin-bottom: 10px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding-left: 17px;
  padding-top: 15px;
  padding-bottom: 15px;

  color: #000;
  font-size: ${Font.Size.L};
  font-weight: 600;
  letter-spacing: 0.014px;
`;
