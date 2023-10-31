import * as styles from '@components/pages/find-password/find-password-certification-input/FindPasswordCertificationInput.style';
import {TouchableOpacity} from 'react-native';
import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {Certification} from '@/apis/auth/find-password/FindPassword';

interface FindPasswordCertificationProps {
  isPhoneNumber: string;
  isCertificationNumber: string;
  setIsCertificationNumber: Dispatch<SetStateAction<string>>;
  isFindPasswordSuccess: boolean;
  setIsCertificationSuccess: Dispatch<React.SetStateAction<boolean>>;
  timer: number;
  setTimer: Dispatch<SetStateAction<number>>;
}

const FindPasswordCertificationInput = ({
  isPhoneNumber,
  isCertificationNumber,
  setIsCertificationNumber,
  isFindPasswordSuccess,
  setIsCertificationSuccess,
  timer,
  setTimer,
}: FindPasswordCertificationProps) => {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isFindPasswordSuccess) {
      setTimer(180);
      const interval = setInterval(() => {
        setTimer(prevTime => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(interval);
            return prevTime;
          }
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isFindPasswordSuccess]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleCertification = async () => {
    try {
      await Certification(isPhoneNumber, Number(isCertificationNumber));
      setSuccess('인증되었습니다.');
      setIsCertificationSuccess(true);
      setError('');
    } catch (error) {
      setError('인증번호가 일치하지 않습니다.');
      setSuccess('');
    }
  };

  return (
    <styles.Box>
      <styles.CertificationBox>
        <styles.CertificationContentBox>
          <styles.CertificationContent>인증번호</styles.CertificationContent>
        </styles.CertificationContentBox>
        <styles.CertificationInputBox>
          <styles.CertificationInput
            value={isCertificationNumber}
            onChangeText={text => setIsCertificationNumber(text)}
          />
          {isFindPasswordSuccess && (
            <styles.Timer>({formatTime(timer)})</styles.Timer>
          )}
        </styles.CertificationInputBox>
        <TouchableOpacity
          onPress={
            isCertificationNumber.length === 6 ? handleCertification : undefined
          }
          disabled={isCertificationNumber.length !== 6}>
          <styles.Button
            style={
              isCertificationNumber.length === 6
                ? {backgroundColor: '#ffca42'}
                : null
            }>
            <styles.ButtonContent numberOfLines={2}>
              인증번호{'\n'}확인
            </styles.ButtonContent>
          </styles.Button>
        </TouchableOpacity>
      </styles.CertificationBox>
      {success ? (
        <styles.SuccessMessageText>{success}</styles.SuccessMessageText>
      ) : (
        error && <styles.ErrorMessageText>{error}</styles.ErrorMessageText>
      )}
    </styles.Box>
  );
};

export default FindPasswordCertificationInput;
