import * as styles from '@components/pages/signin/signin-input/SigninInput.style';

const SigninInput = () => {
  return (
    <styles.InputBox>
      <styles.Input placeholder="휴대폰번호" />
      <styles.Input placeholder="비밀번호" />
    </styles.InputBox>
  );
};

export default SigninInput;
