import * as styles from '@components/pages/terms/terms-alarm-layout/TermsAlarmLayout.style';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import MarginTop from '@components/common/MarginTop';
import CloseButton from '@assets/icons/common/CloseButton.svg';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import TermsAlarmContent from '@components/pages/terms/terms-alarm-content/TermsAlarmContent';

const bottomSpace = getBottomSpace();

const TermsAlarmLayout = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <styles.Box>
      <TouchableWithoutFeedback>
        <ScrollView
          contentContainerStyle={{paddingBottom: bottomSpace}}
          showsVerticalScrollIndicator={false}>
          <MarginTop height={62} />
          <TouchableOpacity onPress={() => navigation.navigate('SignupTerms')}>
            <styles.CloseButtonBox>
              <CloseButton width={30} height={30} />
            </styles.CloseButtonBox>
          </TouchableOpacity>
          <MarginTop height={25} />
          <styles.TitleBox>
            <styles.TitleContent>정보 알림 수신 동의</styles.TitleContent>
          </styles.TitleBox>
          <MarginTop height={25} />
          <TermsAlarmContent />
        </ScrollView>
      </TouchableWithoutFeedback>
    </styles.Box>
  );
};

export default TermsAlarmLayout;
