import * as styles from '@components/pages/find-password/find-password-certification-input/FindPasswordCertificationInput.style';
import {TouchableOpacity} from 'react-native';

const FindPasswordCertificationInput = () => {
  return (
    <styles.Box>
      <styles.CertificationBox>
        <styles.CertificationContentBox>
          <styles.CertificationContent>인증번호</styles.CertificationContent>
        </styles.CertificationContentBox>
        <styles.CertificationInput />
        <TouchableOpacity>
          <styles.Button>
            <styles.ButtonContent numberOfLines={2}>
              인증번호{'\n'}확인
            </styles.ButtonContent>
          </styles.Button>
        </TouchableOpacity>
      </styles.CertificationBox>
    </styles.Box>
  );
};

export default FindPasswordCertificationInput;
