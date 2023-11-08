import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const LevelBox = styled.View`
  width: 84.7328244%;
  height: 2.2300469%;
  flex-direction: row;
  margin-left: 30px;
`;

export const Level = styled.Text`
  width: 261px;
  height: 19px;
  margin-left: 6px;
  color: #000;
  font-size: ${Font.Size.XL};
  font-weight: 600;
`;

export const GuideBox = styled.View`
  width: 49px;
  height: 10px;
  flex-direction: row;
`;

export const GuideText = styled.Text`
  margin-left: 1px;
  color: rgba(0, 0, 0, 0.3);
  font-size: ${Font.Size.XS};
  font-weight: 500;
`;

export const ModalContainer = styled.View`
  position: absolute;
  width: 120px;
  height: 53.166px;
  justify-content: center;
  border-radius: 6px;
  background: #00000099;
  backdrop-filter: blur(3.5px);
`;

export const ModalContent = styled.Text`
  width: 107px;
  height: 40px;
  align-self: center;
  color: rgba(255, 255, 255, 0.6);
  text-align: justify;
  font-size: ${Font.Size.XS};
  font-weight: 500;
`;
