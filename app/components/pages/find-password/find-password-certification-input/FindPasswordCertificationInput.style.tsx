import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View`
  width: 330px;
  height: 32px;
  align-self: center;
  flex-direction: column;
`;

export const CertificationBox = styled.View`
  width: 328px;
  height: 32px;
  flex-direction: row;
`;

export const CertificationContentBox = styled.View`
  width: 60px;
  height: 32px;
  justify-content: center;
`;

export const CertificationContent = styled.Text`
  color: #000;
  font-size: ${Font.Size.XL};
  font-weight: 600;
  letter-spacing: 0.016px;
`;

export const CertificationInput = styled.TextInput`
  width: 195px;
  height: 32px;
  margin-left: 10px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.3);
`;

export const Button = styled.View`
  width: 58px;
  height: 32px;
  margin-left: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: #e0e0e0;
  //background: #ffca42;
`;

export const ButtonContent = styled.Text`
  color: #000;
  font-size: ${Font.Size.S};
  font-weight: 400;
  text-align: center;
`;
