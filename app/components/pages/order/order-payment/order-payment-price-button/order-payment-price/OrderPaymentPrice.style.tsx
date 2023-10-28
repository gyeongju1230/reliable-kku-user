import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View`
  width: 324px;
  height: 19px;
  flex-direction: row;
  align-self: center;
`;

export const CountBox = styled.View`
  width: 96px;
  height: 19px;
  flex-direction: row;
`;

export const CountContent = styled.Text`
  color: #000;
  text-align: center;
  font-size: ${Font.Size.XL};
  font-weight: 600;
`;

export const Count = styled.Text`
  margin-left: 14px;
  color: #000;
  text-align: center;
  font-size: ${Font.Size.XL};
  font-weight: 600;
`;

export const PriceBox = styled.View`
  position: absolute;
  width: 180px;
  height: 19px;
  right: 0;
  flex-direction: row;
`;

export const PriceContent = styled.Text`
  width: 95px;
  height: 19px;
  color: #000;
  text-align: center;
  font-size: ${Font.Size.XL};
  font-weight: 600;
`;

export const Price = styled.Text`
  width: 80px;
  color: #000;
  text-align: right;
  font-size: ${Font.Size.XL};
  font-weight: 600;
`;
