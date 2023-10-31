import * as styles from '@components/pages/find-password/find-password-phone-input/FindPasswordPhoneInput.style';
import {TouchableOpacity} from 'react-native';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {FindPassword} from '@/apis/auth/find-password/FindPassword';

interface FindPasswordPhoneProps {
  isPhoneNumber: string;
  setIsFindPasswordSuccess: Dispatch<SetStateAction<boolean>>;
  setIsPhoneNumber: Dispatch<SetStateAction<string>>;
  setTimer: Dispatch<SetStateAction<number>>;
}

const FindPasswordPhoneInput = ({
  isPhoneNumber,
  setIsFindPasswordSuccess,
  setIsPhoneNumber,
  setTimer,
}: FindPasswordPhoneProps) => {
  const [isRequested, setIsRequested] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleFindPassword = async () => {
    try {
      await FindPassword(isPhoneNumber);
      setIsRequested(true);
      setIsFindPasswordSuccess(true);
      setTimer(180);
      setSuccess('인증번호가 발송되었습니다.');
      setError('');
    } catch (error) {
      console.error('인증번호 전송 실패', error);
      setError('하루에 10번 이상 인증번호를 요청할 수 없습니다.');
      setSuccess('');
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
            onPress={
              isPhoneNumber.length === 11 ? handleFindPassword : undefined
            }
            disabled={isPhoneNumber.length !== 11}>
            <styles.Button
              style={
                isPhoneNumber.length === 11
                  ? {backgroundColor: '#ffca42'}
                  : null
              }>
              <styles.ButtonContent numberOfLines={2}>
                {isRequested ? '재전송' : '인증번호\n전송'}
              </styles.ButtonContent>
            </styles.Button>
          </TouchableOpacity>
        </styles.ButtonBox>
      </styles.Container>
      {success ? (
        <styles.SuccessMessageText>{success}</styles.SuccessMessageText>
      ) : (
        error && <styles.ErrorMessageText>{error}</styles.ErrorMessageText>
      )}
    </styles.Box>
  );
};

export default FindPasswordPhoneInput;
