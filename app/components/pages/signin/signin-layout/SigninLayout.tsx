import * as styles from '@components/pages/signin/signin-layout/SigninLayout.style';
import SigninLogo from '@components/pages/signin/signin-logo/SigninLogo';
import SigninInput from '@components/pages/signin/signin-input/SigninInput';
import SigninButton from '@components/pages/signin/signin-button/SigninButton';
import FindLinkBox from '@components/pages/signin/find-link-box /FindLinkBox';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {BASE_API} from '@/apis/common/CommonApi';
import {Alert, Keyboard, TouchableWithoutFeedback} from 'react-native';

const SigninLayout = () => {
  const [isPhoneNumber, setIsPhoneNumber] = useState('');
  const [isPassword, setIsPassword] = useState('');

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  useEffect(() => {
    const loadCheckedState = async () => {
      try {
        const savedState = await AsyncStorage.getItem('isChecked');
        if (savedState !== null) {
          if (savedState === 'true') {
            BASE_API.get('/api/v1/token/valid')
              .then(res => {
                navigation.navigate('BottomTabs');
              })
              .catch(err => {
                Alert.alert('앗!', '로그인이 만료되었습니다.', [
                  {
                    text: '확인',
                    onPress: () => {
                      navigation.navigate('Signin');
                      console.log('로그인 페이지로 이동');
                    },
                  },
                ]);
              });
          }
        }
      } catch (error) {
        console.error('Error', error);
      }
    };

    loadCheckedState();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <styles.Box>
        <styles.SigninLogoTop />
        <SigninLogo />
        <styles.SigninInputTop />
        <SigninInput
          isPhoneNumber={isPhoneNumber}
          setIsPhoneNumber={setIsPhoneNumber}
          isPassword={isPassword}
          setIsPassword={setIsPassword}
        />
        <SigninButton isPhoneNumber={isPhoneNumber} isPassword={isPassword} />
        <styles.FindLinkBoxTop />
        <FindLinkBox />
      </styles.Box>
    </TouchableWithoutFeedback>
  );
};

export default SigninLayout;
