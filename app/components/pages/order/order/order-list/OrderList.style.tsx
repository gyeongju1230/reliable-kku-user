import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View`
  width: 288px;
  height: 82.3970037%;
  align-self: center;
`;

export const TitleBox = styled.View`
  width: 288px;
  height: 18.1818182%;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.3);
`;

export const Title = styled.Text`
  width: 288px;
  height: 20px;
  color: rgba(0, 0, 0, 0.6);
  font-size: ${Font.Size.XL};
  font-weight: 600;
  letter-spacing: 0.016px;
`;

export const OrderListBox = styled.View`
  width: 288px;
  height: 64.0909091%;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.3);
`;

export const OrderContentBox = styled.View`
  width: 299px;
  height: 21px;
  margin-top: 14px;
  flex-direction: row;
`;

export const OrderContent = styled.Text`
  width: 144px;
  color: #000;
  font-size: ${Font.Size.XL};
  font-weight: 500;
  letter-spacing: 0.016px;
`;

export const OrderContentCount = styled.Text`
  width: 144px;
  text-align: right;
  color: #000;
  font-size: ${Font.Size.XL};
  font-weight: 500;
  letter-spacing: 0.016px;
`;

export const PriceBox = styled.View`
  height: 16%;
  flex-direction: row;
`;

export const PriceContent = styled.Text`
  width: 144px;
  color: #000;
  font-size: ${Font.Size.XXL};
  font-weight: 600;
  letter-spacing: 0.02px;
`;

export const Price = styled.Text`
  width: 144px;
  text-align: right;
  color: #000;
  font-size: ${Font.Size.XXL};
  font-weight: 600;
  letter-spacing: 0.02px;
`;

export const Top = styled.View`
  height: 6.81818182%;
`;
