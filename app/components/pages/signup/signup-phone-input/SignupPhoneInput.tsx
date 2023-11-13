import * as styles from '@components/pages/signup/signup-phone-input/SignupPhoneInput.style';
import {TouchableOpacity} from 'react-native';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {
  CertificationSend,
  PhoneNumberDuplicate,
} from '@/apis/auth/signup/Signup';

interface SignupPhoneInputProps {
  isPhoneNumber: string;
  setIsPhoneNumber: Dispatch<SetStateAction<string>>;
  setIsCertificationSuccess: Dispatch<SetStateAction<boolean>>;
  setTimer: Dispatch<SetStateAction<number>>;
}

const SignupPhoneInput = ({
  isPhoneNumber,
  setIsPhoneNumber,
  setIsCertificationSuccess,
  setTimer,
}: SignupPhoneInputProps) => {
  const [phoneNumberDuplicateSuccess, setPhoneNumberDuplicateSuccess] =
    useState('');
  const [phoneNumberDuplicateError, setPhoneNumberDuplicateError] =
    useState('');
  const [certificationSendSuccess, setCertificationSendSuccess] = useState('');
  const [certificationSendError, setCertificationSendError] = useState('');
  const [isPhoneNumberUnique, setIsPhoneNumberUnique] = useState(false);
  const [isRequested, setIsRequested] = useState(false);

  const handlePhoneNumberDuplicate = async () => {
    try {
      await PhoneNumberDuplicate(isPhoneNumber);
      setPhoneNumberDuplicateSuccess('사용 가능한 번호입니다.');
      setPhoneNumberDuplicateError('');
      setIsPhoneNumberUnique(true);
    } catch (error) {
      console.error('전화번호 중복 확인 실패', error);
      setPhoneNumberDuplicateError('중복된 번호입니다.');
      setPhoneNumberDuplicateSuccess('');
      setIsPhoneNumberUnique(false);
    }
  };

  const handleCertificationSend = async () => {
    if (isPhoneNumberUnique) {
      try {
        await CertificationSend(isPhoneNumber);
        setIsCertificationSuccess(true);
        setIsRequested(true);
        setTimer(180);
        setCertificationSendSuccess('인증번호가 발송되었습니다.');
        setPhoneNumberDuplicateSuccess('');
        setPhoneNumberDuplicateError('');
        setCertificationSendError('');
      } catch (error) {
        console.error('인증번호 전송 실패', error);
        setCertificationSendError(
          '하루에 10번 이상 인증번호를 요청할 수 없습니다.',
        );
        setPhoneNumberDuplicateSuccess('');
        setPhoneNumberDuplicateError('');
        setCertificationSendSuccess('');
      }
    } else {
      setCertificationSendError('중복 확인을 해주세요.');
    }
  };
  return (
    <styles.Box>
      <styles.Content>전화번호</styles.Content>
      <styles.Container>
        <styles.Input
          value={isPhoneNumber}
          onChangeText={text => setIsPhoneNumber(text)}
          placeholder="전화번호를 입력해주세요."
        />
        <styles.ButtonBox>
          <TouchableOpacity
            hitSlop={{top: 20, bottom: 20}}
            onPress={
              isPhoneNumber.length === 11
                ? handlePhoneNumberDuplicate
                : undefined
            }
            disabled={isPhoneNumber.length !== 11}>
            <styles.Button
              style={
                isPhoneNumber.length === 11
                  ? {backgroundColor: '#ffca42'}
                  : null
              }>
              <styles.ButtonContent>중복확인</styles.ButtonContent>
            </styles.Button>
          </TouchableOpacity>
          <TouchableOpacity
            hitSlop={{top: 20, bottom: 20}}
            onPress={handleCertificationSend}
            disabled={!isPhoneNumberUnique}>
            <styles.Button
              style={isPhoneNumberUnique ? {backgroundColor: '#ffca42'} : null}>
              <styles.ButtonContent>
                {isRequested ? '재전송' : '인증번호\n전송'}
              </styles.ButtonContent>
            </styles.Button>
          </TouchableOpacity>
        </styles.ButtonBox>
      </styles.Container>
      {phoneNumberDuplicateSuccess ? (
        <styles.SuccessMessageText>
          {phoneNumberDuplicateSuccess}
        </styles.SuccessMessageText>
      ) : phoneNumberDuplicateError ? (
        <styles.ErrorMessageText>
          {phoneNumberDuplicateError}
        </styles.ErrorMessageText>
      ) : certificationSendSuccess ? (
        <styles.SuccessMessageText>
          {certificationSendSuccess}
        </styles.SuccessMessageText>
      ) : certificationSendError ? (
        <styles.ErrorMessageText>
          {certificationSendError}
        </styles.ErrorMessageText>
      ) : null}
    </styles.Box>
  );
};

export default SignupPhoneInput;
