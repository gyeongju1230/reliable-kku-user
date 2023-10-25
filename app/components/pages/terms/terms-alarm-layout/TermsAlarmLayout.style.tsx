import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View`
  flex: 1;
  background: #fff;
`;

export const CloseButtonBox = styled.View`
  width: 30px;
  height: 30px;
  left: 26px;
`;

export const TitleBox = styled.View`
  align-self: center;
  width: 330px;
  height: 36px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.3);
`;

export const TitleContent = styled.Text`
  width: 170px;
  height: 25px;
  color: #000;
  font-size: ${Font.Size.XXL};
  font-weight: 600;
  letter-spacing: 0.02px;
`;
