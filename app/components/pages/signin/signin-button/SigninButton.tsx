import * as styles from '@components/pages/signin/signin-button/SigninButton.style';
import {TouchableOpacity} from 'react-native';

const SigninButton = () => {
  return (
    <TouchableOpacity>
      <styles.Box>
        <styles.SigninBox>
          <styles.SigninButton>LOGIN</styles.SigninButton>
        </styles.SigninBox>
      </styles.Box>
    </TouchableOpacity>
  );
};

export default SigninButton;
