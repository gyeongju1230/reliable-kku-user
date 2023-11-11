import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View`
  flex: 1;
  background: #efefef;
`;

export const TitleBox = styled.View`
  width: 100%;
  height: 13.028169%;
  justify-content: center;
  background: #fff;
`;

export const Title = styled.Text`
  width: 100%;
  text-align: center;
  color: #000;
  font-size: ${Font.Size.XXL};
  font-weight: 600;
  letter-spacing: 0.02px;
`;

export const Top = styled.View`
  height: 0.7042253%;
`;

export const OrderListContainer = styled.View`
  flex: 1;
  align-items: center;
  background: #fff;
`;

export const OrderListBox = styled.View`
  //width: 83.9694656%;
  height: 116px;
  width: 330px;
  //height: 14.7887323%;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.3);
`;

export const OrderContentBox = styled.View`
  //height: 37.3015873%;
  height: 47px;
  flex-direction: row;
`;

export const OrderDate = styled.View`
  width: 26px;
  height: 38px;
  margin-top: 6px;
  align-items: center;
`;

export const OrderDateContentBold = styled.Text`
  width: 26px;
  height: 24px;
  text-align: center;
  color: #7c6026;
  font-size: ${Font.Size.XXL};
  font-weight: 600;
  letter-spacing: 0.02px;
`;

export const OrderDateContent = styled.Text`
  width: 22px;
  height: 14px;
  text-align: center;
  color: rgba(0, 0, 0, 0.3);
  font-size: ${Font.Size.M};
  font-weight: 500;
  text-transform: uppercase;
`;

export const Container = styled.View`
  width: 228px;
  height: 47px;
  margin-left: 18px;
  flex-direction: column;
`;

export const OrderPrice = styled.Text`
  width: 228px;
  height: 25px;

  color: #000;
  font-size: ${Font.Size.XXL};
  font-weight: 600;
  letter-spacing: 0.02px;
`;

export const OrderTime = styled.Text`
  width: 58px;
  height: 12px;
  right: 15px;
  text-align: right;
  color: rgba(0, 0, 0, 0.3);
  font-size: ${Font.Size.S};
  font-weight: 500;
  text-transform: uppercase;
`;

export const OrderMenu = styled.View`
  width: 286px;
  height: 14px;
  flex-direction: row;
  align-items: center;
  margin-top: 11px;
`;

export const OrderMenuContent = styled.Text`
  width: auto;
  height: 14px;
  color: rgba(0, 0, 0, 0.6);
  font-size: ${Font.Size.S};
  font-weight: 400;
  text-transform: uppercase;
`;

export const Line = styled.View`
  width: 1px;
  height: 9px;
  margin-left: 6px;
  margin-right: 6px;
  border-radius: 1px;
  background: #d9d9d9;
`;

export const OrderMenuCount = styled.Text`
  color: #7c6026;
  font-size: ${Font.Size.S};
  font-weight: 400;
  text-transform: uppercase;
`;
