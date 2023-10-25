import * as styles from '@components/pages/signup/signup-layout/SignupLayout.style';
import CloseButton from '@assets/icons/common/CloseButton.svg';
import SignupNameInput from '@components/pages/signup/signup-name-input/SignupNameInput';
import SignupPhoneInput from '@components/pages/signup/signup-phone-input/SignupPhoneInput';
import SignupCertificationInput from '@components/pages/signup/signup-certification-input/SignupCertificationInput';
import SignupPasswordInput from '@components/pages/signup/signup-password-input/SignupPasswordInput';
import SignupButton from '@components/pages/signup/signup-button/SignupButton';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import MarginTop from '@components/common/MarginTop';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const bottomSpace = getBottomSpace();

const SignupLayout = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <styles.Box>
      <TouchableWithoutFeedback>
        <ScrollView
          contentContainerStyle={{paddingBottom: bottomSpace}}
          showsVerticalScrollIndicator={false}>
          <MarginTop height={62} />
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <styles.CloseButtonBox>
              <CloseButton width={30} height={30} />
            </styles.CloseButtonBox>
          </TouchableOpacity>
          <MarginTop height={25} />
          <styles.TitleBox>
            <styles.TitleContent>회원가입</styles.TitleContent>
          </styles.TitleBox>
          <MarginTop height={40} />
          <SignupNameInput />
          <MarginTop height={40} />
          <SignupPhoneInput />
          <MarginTop height={30} />
          <SignupCertificationInput />
          <MarginTop height={40} />
          <SignupPasswordInput />
          <MarginTop height={100} />
          <SignupButton />
          <MarginTop height={62} />
        </ScrollView>
      </TouchableWithoutFeedback>
    </styles.Box>
  );
};

export default SignupLayout;
