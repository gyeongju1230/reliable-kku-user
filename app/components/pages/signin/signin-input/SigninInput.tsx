import * as styles from '@components/pages/signin/signin-input/SigninInput.style';
import {useState} from 'react';

interface SigninInputProps {
  isPhoneNumber: string;
  setIsPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  isPassword: string;
  setIsPassword: React.Dispatch<React.SetStateAction<string>>;
}

const SigninInput = ({
  isPhoneNumber,
  setIsPhoneNumber,
  isPassword,
  setIsPassword,
}: SigninInputProps) => {
  const [showPassword] = useState(false);
  return (
    <styles.InputBox>
      <styles.Input
        value={isPhoneNumber}
        onChangeText={setIsPhoneNumber}
        placeholder="휴대폰번호"
      />
      <styles.Input
        value={isPassword}
        secureTextEntry={!showPassword}
        onChangeText={text => setIsPassword(text)}
        placeholder="비밀번호"
      />
    </styles.InputBox>
  );
};

export default SigninInput;
