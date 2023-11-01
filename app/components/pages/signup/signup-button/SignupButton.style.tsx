import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View``;

export const ButtonContainer = styled.View`
  width: 330px;
  height: 44px;
  align-self: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 6px;
`;

export const ButtonContent = styled.Text`
  padding: 15px 0 15px;
  text-align: center;
  color: #000;
  font-size: ${Font.Size.XL};
  font-weight: 600;
  line-height: 14px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  background: #0000004d;
`;

export const ModalLayout = styled.View`
  width: 260px;
  height: 110px;
  align-self: center;
  border-radius: 6px;
  background: #fff;
`;

export const CloseButtonBox = styled.View`
  width: 30px;
  height: 30px;
  margin-left: 6px;
`;

export const ContentContainer = styled.View`
  width: 206px;
  height: 40px;
  flex-direction: row;
  align-self: center;
`;

export const ImageBox = styled.View`
  width: 40px;
  height: 40px;
`;

export const ContentBox = styled.View`
  width: 170px;
  height: 40px;
  justify-content: center;
`;

export const Content = styled.Text`
  margin-left: 5px;
  color: #000;
  font-size: ${Font.Size.L};
  font-weight: 600;
`;
