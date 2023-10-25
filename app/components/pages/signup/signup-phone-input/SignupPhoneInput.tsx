import * as styles from '@components/pages/signup/signup-phone-input/SignupPhoneInput.style';
import {TouchableOpacity} from 'react-native';

const SignupPhoneInput = () => {
  return (
    <styles.Box>
      <styles.Content>전화번호</styles.Content>
      <styles.Container>
        <styles.Input placeholder="전화번호를 입력해주세요." />
        <styles.ButtonBox>
          <TouchableOpacity>
            <styles.Button>
              <styles.ButtonContent>중복확인</styles.ButtonContent>
            </styles.Button>
          </TouchableOpacity>
          <TouchableOpacity>
            <styles.Button>
              <styles.ButtonContent numberOfLines={2}>
                인증번호{'\n'}전송
              </styles.ButtonContent>
            </styles.Button>
          </TouchableOpacity>
        </styles.ButtonBox>
      </styles.Container>
    </styles.Box>
  );
};

export default SignupPhoneInput;
