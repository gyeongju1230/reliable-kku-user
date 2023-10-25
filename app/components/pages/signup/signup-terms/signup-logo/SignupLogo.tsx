import * as styles from '@components/pages/signup/signup-terms/signup-logo/SignupLogo.style';
import Logo from '@assets/images/signin/SigninLogo.svg';

const SignupLogo = () => {
  return (
    <styles.LogoBox>
      <Logo width={260} height={260} />
    </styles.LogoBox>
  );
};

export default SignupLogo;
