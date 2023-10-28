import * as styles from '@components/pages/signup/signup-terms/signup-terms-layout/SignupTermsLayout.style';
import SignupLogo from '@components/pages/signup/signup-terms/signup-logo/SignupLogo';
import SignupTermsContent from '@components/pages/signup/signup-terms/signup-terms-content/SignupTermsContent';

const SignupTermsLayout = () => {
  return (
    <styles.Box>
      <styles.SignupLogoTop />
      <SignupLogo />
      <styles.SignupTermsContentTop />
      <SignupTermsContent />
    </styles.Box>
  );
};

export default SignupTermsLayout;
