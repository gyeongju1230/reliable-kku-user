import * as styles from '@components/pages/signin/signin-button/SigninButton.style';
import {TouchableOpacity} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const SigninButton = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <TouchableOpacity>
      <styles.Box>
        <TouchableOpacity onPress={() => navigation.navigate('BottomTabs')}>
          <styles.SigninBox>
            <styles.SigninButton>LOGIN</styles.SigninButton>
          </styles.SigninBox>
        </TouchableOpacity>
      </styles.Box>
    </TouchableOpacity>
  );
};

export default SigninButton;
