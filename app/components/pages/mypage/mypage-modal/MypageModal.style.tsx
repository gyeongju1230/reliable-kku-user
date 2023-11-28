import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View`
  position: absolute;
  width: 175.5px;
  height: 26px;
  bottom: 16px;
  flex-direction: row;
  align-self: center;
`;

export const InquiryBox = styled.View`
  width: 32px;
  height: 26px;
  margin-right: 19px;
`;

export const TermsBox = styled.View`
  width: 32px;
  height: 26px;
  margin-left: 19.5px;
  margin-right: 17.5px;
`;

export const BusinessBox = styled.View`
  width: 36px;
  height: 26px;
  margin-left: 18.5px;
`;

export const LineBox1 = styled.View`
  position: absolute;
  width: 0.5px;
  height: 7px;
  bottom: 0;
  left: 51px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.3);
`;

export const LineBox2 = styled.View`
  position: absolute;
  width: 0.5px;
  height: 7px;
  bottom: 0;
  left: 123px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.3);
`;

export const Content = styled.Text`
  text-align: center;
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

export const CloseModalButtonBox = styled.View`
  width: 24px;
  height: 24px;
  margin-left: 3px;
`;

export const ModalContentBold = styled.Text`
  margin-bottom: 1.5px;
  color: #000;
  text-align: center;
  font-size: ${Font.Size.L};
  font-weight: 600;
`;

export const ModalContent = styled.Text`
  margin-bottom: 1.5px;
  color: #000;
  text-align: center;
  font-size: ${Font.Size.M};
  font-weight: 500;
`;
