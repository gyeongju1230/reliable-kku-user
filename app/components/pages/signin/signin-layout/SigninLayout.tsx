import * as styles from '@components/pages/signin/signin-layout/SigninLayout.style';
import SigninLogo from '@components/pages/signin/signin-logo/SigninLogo';
import SigninInput from '@components/pages/signin/signin-input/SigninInput';
import SigninCheckBox from '@components/pages/signin/signin-checkbox/SigninCheckBox';
import SigninButton from '@components/pages/signin/signin-button/SigninButton';
import FindLinkBox from '@components/pages/signin/find-link-box /FindLinkBox';
import MarginTop from '@components/common/MarginTop';

const SigninLayout = () => {
  return (
    <styles.Box>
      <MarginTop height={170} />
      <SigninLogo />
      <MarginTop height={10} />
      <SigninInput />
      <MarginTop height={8} />
      <SigninCheckBox />
      <MarginTop height={46} />
      <SigninButton />
      <MarginTop height={16} />
      <FindLinkBox />
    </styles.Box>
  );
};

export default SigninLayout;
