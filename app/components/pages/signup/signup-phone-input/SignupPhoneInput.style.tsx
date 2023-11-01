import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View`
  width: 330px;
  height: 58px;
  align-self: center;
  flex-direction: column;
`;

export const Content = styled.Text`
  width: 330px;
  height: 18px;
  margin-bottom: 8px;
  color: #000;
  font-size: ${Font.Size.XL};
  font-weight: 600;
  letter-spacing: 0.016px;
`;

export const Container = styled.View`
  position: relative;
  width: 330px;
  height: 32px;
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#0000004d',
})`
  position: absolute;
  width: 200px;
  height: 32px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.3);
`;

export const ButtonBox = styled.View`
  position: relative;
  width: 122px;
  height: 32px;
  flex-direction: row;
  justify-content: space-between;
  left: 208px;
`;

export const Button = styled.View`
  width: 58px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: #e0e0e0;
`;

export const ButtonContent = styled.Text`
  color: #000;
  font-size: ${Font.Size.S};
  font-weight: 400;
  text-align: center;
`;

export const SuccessMessageText = styled.Text`
  margin-top: 6px;
  color: #2f57e5;
  font-size: ${Font.Size.S};
  font-weight: 400;
  letter-spacing: -0.68px;
`;

export const ErrorMessageText = styled.Text`
  margin-top: 6px;
  color: #f00;
  font-size: ${Font.Size.S};
  font-weight: 400;
  letter-spacing: -0.68px;
`;
