import * as styles from '@components/pages/find-password/find-password-layout/FindPasswordLayout.style';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import MarginTop from '@components/common/MarginTop';
import CloseButton from '@assets/icons/common/CloseButton.svg';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import FindPasswordPhoneInput from '@components/pages/find-password/find-password-phone-input/FindPasswordPhoneInput';
import FindPasswordCertificationInput from '@components/pages/find-password/find-password-certification-input/FindPasswordCertificationInput';
import FindPasswordButton from '@components/pages/find-password/find-password-button/FindPasswordButton';
import {useState} from 'react';

const bottomSpace = getBottomSpace();
const FindPasswordLayout = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [isPhoneNumber, setIsPhoneNumber] = useState('');
  const [isCertificationNumber, setIsCertificationNumber] = useState('');
  const [isFindPasswordSuccess, setIsFindPasswordSuccess] = useState(false);
  const [isCertificationSuccess, setIsCertificationSuccess] = useState(false);
  const [timer, setTimer] = useState(180);

  return (
    <styles.Box>
      <TouchableWithoutFeedback>
        <ScrollView
          contentContainerStyle={{paddingBottom: bottomSpace}}
          showsVerticalScrollIndicator={false}>
          <styles.CloseButtonBoxTop />
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <styles.CloseButtonBox>
              <CloseButton width={30} height={30} />
            </styles.CloseButtonBox>
          </TouchableOpacity>
          <styles.TitleBoxTop />
          <styles.TitleBox>
            <styles.TitleContent>비밀번호 찾기</styles.TitleContent>
          </styles.TitleBox>
          <MarginTop height={40} />
          <FindPasswordPhoneInput
            isPhoneNumber={isPhoneNumber}
            setIsFindPasswordSuccess={setIsFindPasswordSuccess}
            setIsPhoneNumber={setIsPhoneNumber}
            setTimer={setTimer}
          />
          <MarginTop height={30} />
          <FindPasswordCertificationInput
            isPhoneNumber={isPhoneNumber}
            isCertificationNumber={isCertificationNumber}
            setIsCertificationNumber={setIsCertificationNumber}
            isFindPasswordSuccess={isFindPasswordSuccess}
            setIsCertificationSuccess={setIsCertificationSuccess}
            timer={timer}
            setTimer={setTimer}
          />
          <MarginTop height={280} />
          <FindPasswordButton
            isPhoneNumber={isPhoneNumber}
            isCertificationNumber={isCertificationNumber}
            isCertificationSuccess={isCertificationSuccess}
          />
          <MarginTop height={62} />
        </ScrollView>
      </TouchableWithoutFeedback>
    </styles.Box>
  );
};

export default FindPasswordLayout;
