import * as styles from '@components/pages/signup/signup-terms/signup-terms-layout/SignupTermsLayout.style';
import SignupLogo from '@components/pages/signup/signup-terms/signup-logo/SignupLogo';
import SignupTermsContent from '@components/pages/signup/signup-terms/signup-terms-content/SignupTermsContent';
import MarginTop from '@components/common/MarginTop';

const SignupTermsLayout = () => {
  return (
    <styles.Box>
      <MarginTop height={140} />
      <SignupLogo />
      <MarginTop height={50} />
      <SignupTermsContent />
    </styles.Box>
  );
};

export default SignupTermsLayout;
