import * as styles from '@components/pages/terms/terms-mypage-layout/TermsMypageLayout.style';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import MarginTop from '@components/common/MarginTop';
import CloseButton from '@assets/icons/common/CloseButton.svg';
import TermsMypageContent from '@components/pages/terms/terms-mypage-content/TermsMypageContent';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const bottomSpace = getBottomSpace();

const TermsMypageLayout = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <styles.Box>
      <TouchableWithoutFeedback>
        <ScrollView
          contentContainerStyle={{paddingBottom: bottomSpace}}
          showsVerticalScrollIndicator={false}>
          <MarginTop height={62} />
          <TouchableOpacity onPress={() => navigation.navigate('My붕')}>
            <styles.CloseButtonBox>
              <CloseButton width={30} height={30} />
            </styles.CloseButtonBox>
          </TouchableOpacity>
          <MarginTop height={25} />
          <styles.TitleBox>
            <styles.TitleContent>서비스 이용약관</styles.TitleContent>
          </styles.TitleBox>
          <MarginTop height={25} />
          <TermsMypageContent />
        </ScrollView>
      </TouchableWithoutFeedback>
    </styles.Box>
  );
};

export default TermsMypageLayout;
