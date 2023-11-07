import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View`
  width: 296px;
  //height: 211.33px;
  //height: 86.2068966%;
  height: 80.9693487%;
  align-self: center;
`;

export const ContentContainer = styled.View`
  width: 296px;
  height: 67px;
  flex-direction: row;
  //height: 25.2873563%;
`;

export const ContentBox = styled.View`
  width: 200px;
  height: 66px;
`;

export const ContentTitle = styled.Text`
  width: 120px;
  color: #000;
  font-size: ${Font.Size.XXL};
  font-weight: 600;
  letter-spacing: 0.02px;
`;

export const Content = styled.Text`
  width: 200px;
  margin-top: 9px;
  color: #000;
  font-size: ${Font.Size.L};
  font-weight: 500;
  letter-spacing: 0.014px;
`;

export const ButtonBox = styled.View`
  width: 60px;
  height: 46px;
  margin-left: 36px;
`;

export const Button = styled.View`
  width: 60px;
  height: 34px;

  justify-content: center;
  border-radius: 6px;
  background: #7c6026;
`;

export const ButtonContent = styled.Text`
  color: #fff;
  text-align: center;
  font-size: ${Font.Size.XL};
  font-weight: 600;
`;

export const BarContainer = styled.View`
  width: 296px;
  height: 27.7733333%;
  margin-top: -15.5%;
`;

export const BarContentBox = styled.View`
  width: 296px;
  height: 14px;
  margin-top: 18.33px;
  flex-direction: row;
`;

export const BarContent = styled.Text`
  width: 50px;
  height: 14px;
  margin-right: 73px;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  font-size: ${Font.Size.S};
  font-weight: 400;
  letter-spacing: 0.01px;
`;

export const PickupModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  background: #0000004d;
`;

export const PickupModalBox = styled.View`
  width: 260px;
  height: 239px;
  align-items: center;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.25);
  align-self: center;
  border-radius: 6px;
  background: #fff;
`;

export const PickupModalContent = styled.Text`
  color: #000;
  text-align: center;
  font-size: ${Font.Size.L};
  font-weight: 500;
  letter-spacing: 0.014px;
`;
