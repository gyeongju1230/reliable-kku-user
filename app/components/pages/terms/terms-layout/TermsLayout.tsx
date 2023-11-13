import * as styles from '@components/pages/terms/terms-layout/TermsLayout.style';
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
import TermsContent from '@components/pages/terms/terms-content/TermsContent';

const bottomSpace = getBottomSpace();

const TermsLayout = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <styles.Box>
      <TouchableWithoutFeedback>
        <ScrollView
          contentContainerStyle={{paddingBottom: bottomSpace}}
          showsVerticalScrollIndicator={false}>
          <MarginTop height={62} />
          <TouchableOpacity
            onPress={() => navigation.navigate('SignupTerms')}
            hitSlop={{top: 20, bottom: 20}}>
            <styles.CloseButtonBox>
              <CloseButton width={30} height={30} />
            </styles.CloseButtonBox>
          </TouchableOpacity>
          <MarginTop height={25} />
          <styles.TitleBox>
            <styles.TitleContent>이용약관 동의</styles.TitleContent>
          </styles.TitleBox>
          <MarginTop height={25} />
          <TermsContent />
        </ScrollView>
      </TouchableWithoutFeedback>
    </styles.Box>
  );
};

export default TermsLayout;
