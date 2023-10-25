import styled from 'styled-components/native';
import {Font} from '@assets/fonts/Font';

export const Box = styled.View`
  width: 260px;
  height: 170px;
  align-self: center;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: #fff;
`;

export const AllTermsBox = styled.View`
  width: 218px;
  height: 40px;
  align-self: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.3);
`;

export const AllTermsContentBox = styled.View`
  position: relative;
  width: 110px;
  height: 20px;
  flex-direction: row;
  align-self: center;
  justify-content: center;
`;

export const AllTermsContent = styled.Text`
  color: #000;
  font-size: ${Font.Size.L};
  font-weight: 500;
  margin-top: 2px;
  margin-left: 8px;
  letter-spacing: 0.014px;
`;

export const TermsBox = styled.View`
  width: 218px;
  height: 46px;
  align-self: center;
  margin-top: 19px;
`;

export const TermsContentBox = styled.View`
  width: 218px;
  height: 18px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const TermsContent = styled.Text`
  width: 183px;
  height: 18px;
  margin-left: 8px;
  color: #000;
  font-size: ${Font.Size.L};
  font-weight: 500;
  letter-spacing: 0.014px;
`;

export const TermsButton = styled.View`
  width: 218px;
  height: 32px;
  justify-content: center;
  align-self: center;
  margin-top: 22px;
  border-radius: 6px;
`;

export const TermsButtonContent = styled.Text`
  color: #000;
  text-align: center;
  font-size: ${Font.Size.L};
  font-weight: 600;
  letter-spacing: 0.014px;
`;
