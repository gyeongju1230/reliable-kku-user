import {SafeAreaView} from 'react-native';
import * as styles from '@components/pages/signin/signin-layout/SigninLayout.style';
import SigninLogo from '@components/pages/signin/signin-logo/SigninLogo';
import SigninInput from '@components/pages/signin/signin-input/SigninInput';
import SigninCheckBox from '@components/pages/signin/signin-checkbox/SigninCheckBox';
import SigninButton from '@components/pages/signin/signin-button/SigninButton';
import FindLinkBox from '@components/pages/signin/find-link-box /FindLinkBox';

const SigninLayout = () => {
  return (
    <SafeAreaView>
      <styles.Box>
        <SigninLogo />
        <SigninInput />
        <SigninCheckBox />
        <SigninButton />
        <FindLinkBox />
      </styles.Box>
    </SafeAreaView>
  );
};

export default SigninLayout;
