import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View`
  position: fixed;
  width: 100%;
  height: 100%;
`;

export const Top = styled.View`
  height: 17.37089202%;
`;

export const TimeBox = styled.View`
  position: absolute;
  width: 98px;
  height: 120px;
  top: 5%;
  left: 59.87277353%;
  border-radius: 12px;
  background: #fff;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.25);
`;

export const TimeBoxContent = styled.Text`
  top: 22%;
  left: 11%;
  color: #353535;
  font-size: ${Font.Size.XL};
  font-weight: 600;
  letter-spacing: 0.016px;
`;

export const TimeBoxTime = styled.Text`
  margin-top: 40px;
  left: 11%;
  color: #000;
  font-size: ${Font.Size.XXXL};
  font-weight: 600;
  letter-spacing: 0.023px;
`;
