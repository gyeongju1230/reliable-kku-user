import * as styles from '@components/pages/signup/signup-password-input/SignupPasswordInput.style';
import PasswordViewOff from '@assets/images/signup/PasswordViewOff.svg';
import PasswordViewOn from '@assets/images/signup/PasswordViewOn.svg';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {TouchableOpacity} from 'react-native';

interface SignupPasswordInputProps {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  setPasswordSuccess: Dispatch<SetStateAction<boolean>>;
  setPasswordVerifySuccess: Dispatch<SetStateAction<boolean>>;
}

const isPasswordValid = (password: string) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  return passwordRegex.test(password);
};

const SignupPasswordInput = ({
  password,
  setPassword,
  setPasswordSuccess,
  setPasswordVerifySuccess,
}: SignupPasswordInputProps) => {
  const [verifyPassword, setVerifyPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState('');
  const [verifyPasswordMessage, setVerifyPasswordMessage] = useState('');

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility = () => {
    setShowVerifyPassword(!showVerifyPassword);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    const isValid = isPasswordValid(text);
    setPasswordMessage(
      isValid
        ? '사용가능한 비밀번호입니다.'
        : '사용하실 수 없는 비밀번호입니다.',
    );
    if (isValid) {
      setPasswordSuccess(true);
    } else {
      setPasswordSuccess(false);
    }
  };

  const handleVerifyPasswordChange = (text: string) => {
    setVerifyPassword(text);
    if (text === password) {
      setVerifyPasswordMessage('비밀번호가 일치합니다.');
      setPasswordVerifySuccess(true);
    } else {
      setVerifyPasswordMessage('비밀번호가 일치하지 않습니다.');
      setPasswordVerifySuccess(false);
    }
  };

  return (
    <styles.Box>
      <styles.PasswordBox>
        <styles.PasswordContent>비밀번호</styles.PasswordContent>
        <styles.PasswordInputContainer>
          <TouchableOpacity
            onPress={togglePassword}
            hitSlop={{top: 20, bottom: 20}}>
            {showPassword ? (
              <PasswordViewOn width={20} height={20} />
            ) : (
              <PasswordViewOff width={20} height={20} />
            )}
          </TouchableOpacity>
          <styles.PasswordInput
            placeholder="비밀번호를 입력해주세요."
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={handlePasswordChange}
          />
        </styles.PasswordInputContainer>
        {passwordMessage === '사용가능한 비밀번호입니다.' ||
        passwordMessage === '사용하실 수 없는 비밀번호입니다.' ? (
          <>
            {passwordMessage === '사용가능한 비밀번호입니다.' ? (
              <styles.SuccessMessageText>
                {passwordMessage}
              </styles.SuccessMessageText>
            ) : (
              <styles.ErrorMessageText>
                {passwordMessage}
              </styles.ErrorMessageText>
            )}
          </>
        ) : (
          <styles.PasswordCheck>
            8-20자 이내 영문(대,소문자), 숫자, 특수문자를 조합하셔서 작성해
            주세요.
          </styles.PasswordCheck>
        )}
      </styles.PasswordBox>
      <styles.PasswordBox>
        <styles.PasswordContent>비밀번호 확인</styles.PasswordContent>
        <styles.PasswordInputContainer>
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            hitSlop={{top: 20, bottom: 20}}>
            {showVerifyPassword ? (
              <PasswordViewOn width={20} height={20} />
            ) : (
              <PasswordViewOff width={20} height={20} />
            )}
          </TouchableOpacity>
          <styles.PasswordInput
            placeholder="비밀번호를 입력해주세요."
            secureTextEntry={!showVerifyPassword}
            value={verifyPassword}
            onChangeText={handleVerifyPasswordChange}
          />
        </styles.PasswordInputContainer>
        {verifyPassword && verifyPasswordMessage && (
          <>
            {verifyPasswordMessage === '비밀번호가 일치합니다.' ? (
              <styles.SuccessMessageText>
                {verifyPasswordMessage}
              </styles.SuccessMessageText>
            ) : (
              <styles.ErrorMessageText>
                {verifyPasswordMessage}
              </styles.ErrorMessageText>
            )}
          </>
        )}
      </styles.PasswordBox>
    </styles.Box>
  );
};

export default SignupPasswordInput;
