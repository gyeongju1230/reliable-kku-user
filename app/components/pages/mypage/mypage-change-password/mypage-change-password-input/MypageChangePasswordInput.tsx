import * as styles from '@components/pages/mypage/mypage-change-password/mypage-change-password-input/MypageChangePasswordInput.style';
import {Alert, TouchableOpacity} from 'react-native';
import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import PasswordViewOn from '@assets/images/signup/PasswordViewOn.svg';
import PasswordViewOff from '@assets/images/signup/PasswordViewOff.svg';
import {VerifyCurrentPassword} from '@/apis/Mypage/Mypage';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

interface MypageChangePasswordInputProps {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  setCurrentSuccess: Dispatch<SetStateAction<boolean>>;
  setPassSuccess: Dispatch<SetStateAction<boolean>>;
  setVerifySuccess: Dispatch<SetStateAction<boolean>>;
}
const isPasswordValid = (password: string) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  return passwordRegex.test(password);
};

const MypageChangePasswordInput = ({
  password,
  setPassword,
  setCurrentSuccess,
  setPassSuccess,
  setVerifySuccess,
}: MypageChangePasswordInputProps) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);
  const [currentPasswordSuccess, setCurrentPasswordSuccess] = useState('');
  const [currentPasswordError, setCurrentPasswordError] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [verifyPasswordSuccess, setVerifyPasswordSuccess] = useState('');
  const [verifyPasswordError, setVerifyPasswordError] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(false);

  const toggleCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility = () => {
    setShowVerifyPassword(!showVerifyPassword);
  };

  const handleVerifyCurrentPassword = async (currentPassword: string) => {
    try {
      console.log('currentPassword : ', currentPassword);
      const response = await VerifyCurrentPassword(currentPassword);

      if (response.isPasswordMatch) {
        setCurrentSuccess(true);
        setCurrentPasswordSuccess('비밀번호가 일치합니다.');
        setCurrentPasswordError('');
      } else {
        setCurrentSuccess(false);
        setCurrentPasswordError('비밀번호가 일치하지 않습니다.');
        setCurrentPasswordSuccess('');
      }
    } catch (error) {
      setCurrentPasswordError('비밀번호 확인 중 오류가 발생했습니다.');
      setCurrentPasswordSuccess('');

      const navigation: NavigationProp<ParamListBase> = useNavigation();

      Alert.alert('앗!', '로그인이 만료되었습니다.', [
        {
          text: '확인',
          onPress: () => {
            navigation.navigate('Signin');
            console.log('로그인 페이지로 이동');
          },
        },
      ]);
    }
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
      setPassSuccess(true);
    } else {
      setPasswordSuccess(false);
      setPassSuccess(false);
    }
  };

  const handleVerifyPasswordsMatch = (verifyPassword: string) => {
    if (password === verifyPassword && password !== '') {
      setPasswordMatch(true);
      setVerifySuccess(true);
      setVerifyPasswordSuccess('비밀번호가 일치합니다.');
      setVerifyPasswordError('');
    } else {
      setPasswordMatch(false);
      setVerifySuccess(false);
      setVerifyPasswordError('비밀번호가 일치하지 않습니다.');
      setVerifyPasswordSuccess('');
    }
  };

  return (
    <styles.Box>
      <styles.PasswordBox>
        <styles.PasswordContent>현재 비밀번호</styles.PasswordContent>
        <styles.PasswordInputContainer>
          <TouchableOpacity onPress={toggleCurrentPassword}>
            {showCurrentPassword ? (
              <PasswordViewOn width={20} height={20} />
            ) : (
              <PasswordViewOff width={20} height={20} />
            )}
          </TouchableOpacity>
          <styles.PasswordInput
            placeholder="비밀번호를 입력해주세요."
            secureTextEntry={!showCurrentPassword}
            value={currentPassword}
            onChangeText={text => {
              setCurrentPassword(text);
              handleVerifyCurrentPassword(text);
            }}
          />
        </styles.PasswordInputContainer>
        {currentPasswordSuccess ? (
          <styles.SuccessMessageText>
            {currentPasswordSuccess}
          </styles.SuccessMessageText>
        ) : (
          currentPasswordError && (
            <styles.ErrorMessageText>
              {currentPasswordError}
            </styles.ErrorMessageText>
          )
        )}
      </styles.PasswordBox>
      <styles.PasswordBox>
        <styles.PasswordContent>새 비밀번호</styles.PasswordContent>
        <styles.PasswordInputContainer>
          <TouchableOpacity onPress={togglePassword}>
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
            editable={currentPasswordSuccess === '비밀번호가 일치합니다.'}
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
        <styles.PasswordContent>새 비밀번호 확인</styles.PasswordContent>
        <styles.PasswordInputContainer>
          <TouchableOpacity onPress={togglePasswordVisibility}>
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
            onChangeText={text => {
              setVerifyPassword(text);
              handleVerifyPasswordsMatch(text);
            }}
            editable={
              currentPasswordSuccess === '비밀번호가 일치합니다.' &&
              passwordMessage === '사용가능한 비밀번호입니다.'
            }
          />
        </styles.PasswordInputContainer>
        {verifyPasswordSuccess ? (
          <styles.SuccessMessageText>
            {verifyPasswordSuccess}
          </styles.SuccessMessageText>
        ) : (
          verifyPasswordError && (
            <styles.ErrorMessageText>
              {verifyPasswordError}
            </styles.ErrorMessageText>
          )
        )}
      </styles.PasswordBox>
    </styles.Box>
  );
};

export default MypageChangePasswordInput;
