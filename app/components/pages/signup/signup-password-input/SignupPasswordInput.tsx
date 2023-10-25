import * as styles from '@components/pages/signup/signup-password-input/SignupPasswordInput.style';
import PasswordViewOff from '@assets/images/signup/PasswordViewOff.svg';
import PasswordViewOn from '@assets/images/signup/PasswordViewOn.svg';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

const SignupPasswordInput = () => {
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility = () => {
    setShowVerifyPassword(!showVerifyPassword);
  };

  return (
    <styles.Box>
      <styles.PasswordBox>
        <styles.PasswordContent>비밀번호</styles.PasswordContent>
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
        <styles.PasswordContent>비밀번호 확인</styles.PasswordContent>
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

export default SignupPasswordInput;
