import * as styles from '@components/pages/signin/signin-logo/SigninLogo.style';
import Logo from '@assets/images/signin/SigninLogo.svg';

const SigninLogo = () => {
  return (
    <styles.LogoBox>
      <Logo width={177} height={171} />
    </styles.LogoBox>
  );
};

export default SigninLogo;
