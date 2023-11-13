import * as styles from '@components/pages/signin/find-link-box /FindLinkBox.style';
import {TouchableOpacity} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const FindLinkBox = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <styles.Box>
      <styles.FindLinkContainer>
        <TouchableOpacity
          onPress={() => navigation.navigate('FindPassword')}
          hitSlop={{top: 20, bottom: 20}}>
          <styles.FindText>비밀번호 찾기</styles.FindText>
        </TouchableOpacity>
        <styles.Line>|</styles.Line>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignupTerms')}
          hitSlop={{top: 20, bottom: 20}}>
          <styles.SignupText>회원가입</styles.SignupText>
        </TouchableOpacity>
      </styles.FindLinkContainer>
    </styles.Box>
  );
};

export default FindLinkBox;
