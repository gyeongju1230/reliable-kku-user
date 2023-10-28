import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View`
  flex: 1;
  background: #eceae0;
`;

export const Top = styled.View`
  height: 12.5586854%;
`;
export const Container = styled.View`
  width: 335px;
  height: 72.0657276%;
  flex-direction: column;
  align-self: center;
`;

export const OrderBox = styled.View`
  width: 335px;
  height: 43.485342%;
  border-radius: 15px;
  background: #fff;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.25);
`;

export const OrderBoxTop = styled.View`
  height: 11.1111111%;
`;
export const CotentBox = styled.View`
  width: 335px;
  height: 14.0065146%;
  justify-content: center;
`;

export const Content = styled.Text`
  color: rgba(0, 0, 0, 0.3);
  text-align: center;
  font-size: ${Font.Size.S};
  font-weight: 500;
`;

export const OrderListBox = styled.View`
  width: 335px;
  height: 43.485342%;
  border-radius: 12px;
  background: #fff;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.25);
`;

export const OrderListTop = styled.View`
  height: 8.61423221%;
`;
