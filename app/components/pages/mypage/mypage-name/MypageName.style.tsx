import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const NameContainer = styled.View`
  width: 342px;
  height: 8%;
  flex-direction: row;
  align-self: center;
`;

export const NameBox = styled.View`
  width: 261px;
  height: 57px;
  flex-direction: column;
`;

export const Name = styled.Text`
  width: 318px;
  height: 29px;
  color: #000;
  font-size: ${Font.Size.XXXL};
  font-weight: 700;
  letter-spacing: 0.023px;
`;

export const NameContent = styled.Text`
  width: 148px;
  height: 30px;
  color: #000;
  font-size: ${Font.Size.XXXL};
  font-weight: 700;
  letter-spacing: 0.023px;
`;

export const Top = styled.View`
  height: 8.4507042%;
`;

export const ModalContainer = styled.View`
  position: absolute;
  width: 70.68px;
  height: 64.791px;
  top: 16.8%;
  left: 74%;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalContentBox = styled.View`
  width: 63.248px;
  height: 22.05px;
  align-self: center;
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(255, 255, 255, 0.3);
`;

export const ModalContent = styled.Text`
  margin-top: 4.05px;
  color: #fff;
  text-align: center;
  font-size: ${Font.Size.S};
  font-weight: 400;
`;

export const ModalBox = styled.View`
  width: 260px;
  height: 110px;
  align-self: center;
  border-radius: 6px;
  background: #fff;
`;

export const CloseButtonBox = styled.View`
  width: 24px;
  height: 24px;
  margin-left: 6px;
`;

export const ModalText = styled.Text`
  color: #000;
  text-align: center;
  font-size: ${Font.Size.L};
  font-weight: 600;
`;

export const ModalButtonBox = styled.View`
  width: 140px;
  height: 26px;
  margin-top: 17px;
  flex-direction: row;
  align-self: center;
`;

export const ModalYesButton = styled.View`
  width: 58px;
  height: 26px;
  margin-right: 24px;
  justify-content: center;
  border-radius: 6px;
  background: #ffca42;
`;

export const ModalButtonText = styled.Text`
  text-align: center;
  color: #000;
  font-size: ${Font.Size.L};
  font-weight: 500;
`;

export const ModalNoButton = styled.View`
  width: 58px;
  height: 26px;
  justify-content: center;
  border-radius: 6px;
  background: #d9d9d9;
`;
