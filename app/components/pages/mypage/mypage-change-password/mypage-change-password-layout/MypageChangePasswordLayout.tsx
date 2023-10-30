import * as styles from '@components/pages/mypage/mypage-change-password/mypage-change-password-layout/MypageChangePasswordLayout.style';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import CloseButton from '@assets/icons/common/CloseButton.svg';
import MarginTop from '@components/common/MarginTop';
import MypageChangePasswordInput from '@components/pages/mypage/mypage-change-password/mypage-change-password-input/MypageChangePasswordInput';
import MypageChangePasswordButton from '@components/pages/mypage/mypage-change-password/mypage-change-password-button/MypageChangePasswordButton';

const bottomSpace = getBottomSpace();

const MypageChangePasswordLayout = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <styles.Box>
      <TouchableWithoutFeedback>
        <ScrollView
          contentContainerStyle={{paddingBottom: bottomSpace}}
          showsVerticalScrollIndicator={false}>
          <styles.CloseButtonBoxTop />
          <TouchableOpacity onPress={() => navigation.navigate('My붕')}>
            <styles.CloseButtonBox>
              <CloseButton width={30} height={30} />
            </styles.CloseButtonBox>
          </TouchableOpacity>
          <styles.TitleBoxTop />
          <styles.TitleBox>
            <styles.TitleContent>비밀번호 변경</styles.TitleContent>
          </styles.TitleBox>
          <MarginTop height={40} />
          <MypageChangePasswordInput />
          <MarginTop height={260} />
          <MypageChangePasswordButton />
        </ScrollView>
      </TouchableWithoutFeedback>
    </styles.Box>
  );
};

export default MypageChangePasswordLayout;
