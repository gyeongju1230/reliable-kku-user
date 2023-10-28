import * as styles from '@components/pages/signin/signin-layout/SigninLayout.style';
import SigninLogo from '@components/pages/signin/signin-logo/SigninLogo';
import SigninInput from '@components/pages/signin/signin-input/SigninInput';
import SigninCheckBox from '@components/pages/signin/signin-checkbox/SigninCheckBox';
import SigninButton from '@components/pages/signin/signin-button/SigninButton';
import FindLinkBox from '@components/pages/signin/find-link-box /FindLinkBox';
import MarginTop from '@components/common/MarginTop';
import {View} from 'react-native';
import {
  FindLinkBoxTop,
  SigninButtonTop,
  SigninCheckBoxTop,
  SigninInputTop,
} from '@components/pages/signin/signin-layout/SigninLayout.style';

const SigninLayout = () => {
  return (
    <styles.Box>
      <styles.SigninLogoTop />
      <SigninLogo />
      <styles.SigninInputTop />
      <SigninInput />
      <styles.SigninCheckBoxTop />
      <SigninCheckBox />
      <styles.SigninButtonTop />
      <SigninButton />
      <styles.FindLinkBoxTop />
      <FindLinkBox />
    </styles.Box>
  );
};

export default SigninLayout;
