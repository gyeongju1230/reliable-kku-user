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
import {useState} from 'react';

const bottomSpace = getBottomSpace();

const SignupLayout = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [isName, setIsName] = useState('');
  const [isPhoneNumber, setIsPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [passwordVerifySuccess, setPasswordVerifySuccess] = useState(false);
  const [isCertificationSuccess, setIsCertificationSuccess] = useState(false);
  const [isCertificationCheckSuccess, setIsCertificationCheckSuccess] =
    useState(false);
  const [timer, setTimer] = useState(180);

  return (
    <styles.Box>
      <TouchableWithoutFeedback>
        <ScrollView
          contentContainerStyle={{paddingBottom: bottomSpace}}
          showsVerticalScrollIndicator={false}>
          <MarginTop height={42} />
          <TouchableOpacity
            onPress={() => navigation.navigate('Signin')}
            hitSlop={{top: 20, bottom: 20}}>
            <styles.CloseButtonBox>
              <CloseButton width={30} height={30} />
            </styles.CloseButtonBox>
          </TouchableOpacity>
          <MarginTop height={25} />
          <styles.TitleBox>
            <styles.TitleContent>회원가입</styles.TitleContent>
          </styles.TitleBox>
          <MarginTop height={40} />
          <SignupNameInput isName={isName} setIsName={setIsName} />
          <MarginTop height={40} />
          <SignupPhoneInput
            isPhoneNumber={isPhoneNumber}
            setIsPhoneNumber={setIsPhoneNumber}
            setIsCertificationSuccess={setIsCertificationSuccess}
            setTimer={setTimer}
          />
          <MarginTop height={30} />
          <SignupCertificationInput
            isPhoneNumber={isPhoneNumber}
            isCertificationSuccess={isCertificationSuccess}
            setIsCertificationCheckSuccess={setIsCertificationCheckSuccess}
            timer={timer}
            setTimer={setTimer}
          />
          <MarginTop height={40} />
          <SignupPasswordInput
            password={password}
            setPassword={setPassword}
            setPasswordSuccess={setPasswordSuccess}
            setPasswordVerifySuccess={setPasswordVerifySuccess}
          />
          <MarginTop height={10} />
        </ScrollView>
      </TouchableWithoutFeedback>
      <SignupButton
        isName={isName}
        isPhoneNumber={isPhoneNumber}
        password={password}
        passwordSuccess={passwordSuccess}
        passwordVerifySuccess={passwordVerifySuccess}
        isCertificationSuccess={isCertificationSuccess}
        isCertificationCheckSuccess={isCertificationCheckSuccess}
      />
    </styles.Box>
  );
};

export default SignupLayout;
