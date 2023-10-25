import * as styles from '@components/pages/signin/find-link-box /FindLinkBox.style';
import {Text, TouchableOpacity} from 'react-native';
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
        <TouchableOpacity>
          <styles.FindText>비밀번호 찾기</styles.FindText>
        </TouchableOpacity>
        <Text>|</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
          <styles.SignupText>회원가입</styles.SignupText>
        </TouchableOpacity>
      </styles.FindLinkContainer>
    </styles.Box>
  );
};

export default FindLinkBox;
