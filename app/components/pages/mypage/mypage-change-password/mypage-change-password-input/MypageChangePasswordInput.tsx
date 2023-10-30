import * as styles from '@components/pages/mypage/mypage-change-password/mypage-change-password-input/MypageChangePasswordInput.style';
import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import PasswordViewOn from '@assets/images/signup/PasswordViewOn.svg';
import PasswordViewOff from '@assets/images/signup/PasswordViewOff.svg';

const MypageChangePasswordInput = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);

  const toggleCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility = () => {
    setShowVerifyPassword(!showVerifyPassword);
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
            onChangeText={text => setCurrentPassword(text)}
          />
        </styles.PasswordInputContainer>
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
            onChangeText={text => setPassword(text)}
          />
        </styles.PasswordInputContainer>
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
            onChangeText={text => setVerifyPassword(text)}
          />
        </styles.PasswordInputContainer>
      </styles.PasswordBox>
    </styles.Box>
  );
};

export default MypageChangePasswordInput;
