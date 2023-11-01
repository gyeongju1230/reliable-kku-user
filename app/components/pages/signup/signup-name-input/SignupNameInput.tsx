import * as styles from '@components/pages/signup/signup-name-input/SignupNameInput.style';
import * as inspector from 'inspector';
import {Dispatch, SetStateAction} from 'react';

interface SignupNameInputProps {
  isName: string;
  setIsName: Dispatch<SetStateAction<string>>;
}

const SignupNameInput = ({isName, setIsName}: SignupNameInputProps) => {
  return (
    <styles.Box>
      <styles.Content>이름(실명)</styles.Content>
      <styles.Input
        value={isName}
        onChangeText={text => setIsName(text)}
        placeholder="이름을 입력해주세요."
      />
    </styles.Box>
  );
};

export default SignupNameInput;
