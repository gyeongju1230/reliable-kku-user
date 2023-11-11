import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View`
  width: 238px;
  height: 6.7511737%;
  flex-direction: column;
  align-self: center;
`;

export const CheckContainer = styled.View`
  width: 233px;
  height: 30px;
  flex-direction: row;
  align-items: center;
  align-self: start;
`;

export const CheckContent = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  font-size: ${Font.Size.S};
  font-weight: 500;
  letter-spacing: 0.01px;
`;

export const CheckContentLine = styled.Text`
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  font-size: ${Font.Size.S};
  font-weight: 500;
  letter-spacing: 0.01px;
  text-decoration-line: underline;
`;

export const CheckBox = styled.View`
  width: 20px;
  height: 20px;
  margin-left: 6px;
`;

export const ContentBox = styled.View`
  width: 240px;
  height: 12px;
  align-self: center;
`;

export const ContentBoxTop = styled.View`
  height: 32%;
`;

export const Content = styled.Text`
  color: rgba(0, 0, 0, 0.3);
  font-size: ${Font.Size.XS};
  font-weight: 500;
`;
