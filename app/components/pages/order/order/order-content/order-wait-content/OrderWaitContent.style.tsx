import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View`
  width: 296px;
  //height: 225px;
  //width: 88.358209%;
  height: 86.2068966%;
  align-self: center;
`;

export const ContentContainer = styled.View`
  width: 296px;
  height: 66px;
  flex-direction: row;
  //height: 25.2873563%;
`;

export const ContentBox = styled.View`
  width: 200px;
  height: 66px;
`;

export const ContentTitle = styled.Text`
  width: 110px;
  color: #000;
  font-size: ${Font.Size.XXL};
  font-weight: 600;
  letter-spacing: 0.02px;
`;

export const ContentBold = styled.Text`
  width: 200px;
  margin-top: 9px;
  color: #000;
  font-size: ${Font.Size.L};
  font-weight: 500;
  letter-spacing: 0.014px;
`;

export const Content = styled.Text`
  width: 200px;
  margin-top: 4px;
  color: rgba(0, 0, 0, 0.3);
  font-size: ${Font.Size.S};
  font-weight: 500;
  letter-spacing: 0.01px;
`;

export const Button = styled.View`
  width: 60px;
  height: 34px;
  margin-left: 36px;
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
