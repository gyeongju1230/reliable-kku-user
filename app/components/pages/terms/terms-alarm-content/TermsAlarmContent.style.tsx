import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View`
  width: 330px;
  height: auto;
  align-self: center;
`;

export const ContentContainer = styled.View`
  width: 330px;
  height: auto;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.3);
`;

export const TitleContainer = styled.View`
  width: 330px;
  height: 18px;
  flex-direction: row;
`;

export const ImageBox = styled.View`
  width: 11px;
  height: 18px;
`;

export const TitleBox = styled.View`
  width: 307px;
  height: 18px;
  margin-left: 11.5px;
`;
export const Title = styled.Text`
  color: #000;
  font-size: ${Font.Size.L};
  font-weight: 500;
  letter-spacing: 0.014px;
`;

export const ContentBox = styled.View`
  width: 307px;
  height: auto;
  margin-left: 22.5px;
`;

export const Content = styled.Text`
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.012px;
`;
