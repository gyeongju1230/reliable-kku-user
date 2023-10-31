import * as styles from '@components/pages/signin/signin-layout/SigninLayout.style';
import SigninLogo from '@components/pages/signin/signin-logo/SigninLogo';
import SigninInput from '@components/pages/signin/signin-input/SigninInput';
import SigninButton from '@components/pages/signin/signin-button/SigninButton';
import FindLinkBox from '@components/pages/signin/find-link-box /FindLinkBox';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const axiosInstance = axios.create({
  baseURL: 'https://dev.deunku.com',
  withCredentials: true,
});
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
            axiosInstance
              .get('/api/v1/token/valid')
              .then(res => {
                navigation.navigate('BottomTabs');
              })
              .catch(err => {
                axiosInstance
                  .get('/api/v1/token/update')
                  .then(res => {
                    navigation.navigate('BottomTabs');
                  })
                  .catch(errs => {});
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
  );
};

export default SigninLayout;
