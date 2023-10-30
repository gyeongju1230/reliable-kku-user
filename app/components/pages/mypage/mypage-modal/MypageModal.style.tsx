import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View`
  position: absolute;
  width: 102px;
  height: 26px;
  bottom: 16px;
  flex-direction: row;
  align-self: center;
`;

export const InquiryBox = styled.View`
  width: 28px;
  height: 26px;
  margin-right: 23px;
`;

export const TermsBox = styled.View`
  width: 28px;
  height: 26px;
  margin-left: 22.5px;
`;

export const LineBox = styled.View`
  position: absolute;
  width: 0.5px;
  height: 7px;
  bottom: 0;
  left: 51px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.3);
`;

export const Content = styled.Text`
  color: rgba(0, 0, 0, 0.3);
  font-size: ${Font.Size.XS};
  font-weight: 500;
`;

export const InquiryModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  background: #0000004d;
`;

export const InquiryModalLayout = styled.View`
  width: 260px;
  height: 110px;
  align-self: center;
  border-radius: 6px;
  background: #fff;
`;

export const CloseButtonBox = styled.View`
  width: 24px;
  height: 24px;
  margin-left: 3px;
`;

export const InquiryModalContent = styled.Text`
  color: #000;
  text-align: center;
  font-size: ${Font.Size.L};
  font-weight: 600;
`;

export const InquiryModalButton = styled.View`
  width: 140px;
  height: 26px;
  border-radius: 6px;
  margin-top: 17px;
  align-self: center;
  justify-content: center;
  background: #d9d9d9;
`;

export const InquiryModalButtonContent = styled.View`
  width: 109px;
  height: 17px;
  align-self: center;
  flex-direction: row;
`;

export const InquiryModalButtonText = styled.Text`
  margin-left: 4px;
  color: #000;
  font-size: ${Font.Size.L};
  font-weight: 500;
`;
