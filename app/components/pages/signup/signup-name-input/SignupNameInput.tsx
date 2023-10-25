import * as styles from '@components/pages/signup/signup-name-input/SignupNameInput.style';

const SignupNameInput = () => {
  return (
    <styles.Box>
      <styles.Content>이름(실명)</styles.Content>
      <styles.Input placeholder="이름을 입력해주세요." />
    </styles.Box>
  );
};

export default SignupNameInput;
