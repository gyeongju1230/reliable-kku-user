import * as styles from '@components/pages/find-password/find-password-layout/FindPasswordLayout.style';
import {
  ScrollView,
  Text,
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

const bottomSpace = getBottomSpace();
const FindPasswordLayout = () => {
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
            <styles.TitleContent>비밀번호 찾기</styles.TitleContent>
          </styles.TitleBox>
          <MarginTop height={40} />
          <FindPasswordPhoneInput />
          <MarginTop height={30} />
          <FindPasswordCertificationInput />
          <MarginTop height={280} />
          <FindPasswordButton />
          <MarginTop height={62} />
        </ScrollView>
      </TouchableWithoutFeedback>
    </styles.Box>
  );
};

export default FindPasswordLayout;
