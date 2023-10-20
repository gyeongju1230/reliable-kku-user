import * as styles from '@components/pages/signin/find-link-box /FindLinkBox.style';
import {Text, TouchableOpacity} from 'react-native';

const FindLinkBox = () => {
  return (
    <styles.Box>
      <styles.FindLinkContainer>
        <TouchableOpacity>
          <styles.FindText>비밀번호 찾기</styles.FindText>
        </TouchableOpacity>
        <Text>|</Text>
        <TouchableOpacity>
          <styles.SignupText>회원가입</styles.SignupText>
        </TouchableOpacity>
      </styles.FindLinkContainer>
    </styles.Box>
  );
};

export default FindLinkBox;
