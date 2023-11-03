import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View`
  width: 100%;
  height: 57.6291079%;
  align-items: center;
  background: #fff;
`;

export const MenuContainer = styled.View`
  width: 330px;
  height: 130px;
  margin-top: 18px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.3);
`;

export const ImageBox = styled.Text`
  width: 112px;
  height: 110px;
  border-radius: 12px;
  background: #eceae0;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15);
`;

export const ContentContainer = styled.View`
  width: 172px;
  height: 99.18px;
  margin-top: 5px;
  margin-left: 44px;
`;

export const ContentBox = styled.View`
  width: 172px;
  height: 43px;
  margin-bottom: 28.18px;
`;

export const Title = styled.Text`
  color: #000;
  font-size: ${Font.Size.XL};
  font-weight: 600;
  letter-spacing: 0.016px;
`;

export const Content = styled.Text`
  margin-top: 11px;
  color: rgba(0, 0, 0, 0.6);
  font-size: ${Font.Size.S};
  font-weight: 400;
`;

export const PriceContainer = styled.View`
  width: 172px;
  height: 28px;
  flex-direction: row;
`;

export const PriceBox = styled.View`
  width: 83px;
  height: 24px;
  flex-direction: row;
  align-self: center;
`;
export const Price = styled.Text`
  color: #000;
  font-size: ${Font.Size.XXL};
  font-weight: 600;
  letter-spacing: 0.02px;
`;

export const PriceContent = styled.Text`
  height: 16px;
  margin-top: 4.82px;
  margin-left: 5px;
  color: #000;
  font-size: ${Font.Size.L};
  font-weight: 500;
  letter-spacing: 0.014px;
`;

export const CountContainer = styled.View`
  width: 75px;
  height: 28px;
  margin-left: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 0.5px solid rgba(0, 0, 0, 0.3);
`;

export const CountBox = styled.View`
  width: 54px;
  height: 19px;
  flex-direction: row;
`;

export const CountMinusImageBox = styled.View`
  width: 7px;
  height: 19px;
  background: violet;
`;

export const CountPlusImageBox = styled.View`
  width: 11px;
  height: 19px;
  background: violet;
`;

export const Count = styled.Text`
  width: 36px;
  height: 19px;
  text-align: center;
  color: #000;
  font-size: ${Font.Size.L};
  font-weight: 400;
  letter-spacing: 0.014px;
`;
