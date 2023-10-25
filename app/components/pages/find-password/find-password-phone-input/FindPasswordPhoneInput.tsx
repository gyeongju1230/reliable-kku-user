import * as styles from '@components/pages/find-password/find-password-phone-input/FindPasswordPhoneInput.style';
import {TouchableOpacity} from 'react-native';

const FindPasswordPhoneInput = () => {
  return (
    <styles.Box>
      <styles.Content>전화번호</styles.Content>
      <styles.Container>
        <styles.Input placeholder="전화번호를 입력해주세요." />
        <styles.ButtonBox>
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

export default FindPasswordPhoneInput;
