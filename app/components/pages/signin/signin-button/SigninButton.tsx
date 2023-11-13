import * as styles from '@components/pages/signin/signin-button/SigninButton.style';
import {TouchableOpacity, View} from 'react-native';
import {Signin} from '@/apis/auth/signin/Signin';
import React, {useEffect, useState} from 'react';
import Check from '@assets/icons/common/CheckBox.svg';
import UnCheck from '@assets/icons/common/UnCheckBox.svg';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SigninButtonProps {
  isPhoneNumber: string;
  isPassword: string;
}
const SigninButton = ({isPhoneNumber, isPassword}: SigninButtonProps) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadCheckedState = async () => {
      try {
        const savedState = await AsyncStorage.getItem('isChecked');
        if (savedState !== null) {
          setIsChecked(savedState === 'true');
          console.log('isChecked 값:', savedState);
        }
      } catch (error) {
        console.error('Error', error);
      }
    };
    loadCheckedState();
  }, []);

  const toggleCheck = async () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    try {
      await AsyncStorage.setItem('isChecked', newValue.toString());
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleSignin = async () => {
    try {
      await Signin(isPhoneNumber, isPassword);
      navigation.navigate('BottomTabs');
    } catch (error) {
      console.error('로그인 실패여기여기', error);
      setError('ID 또는 비밀번호를 잘못 입력하였습니다.');
    }
  };

  return (
    <View>
      <styles.Box>
        <styles.CheckContainer>
          <TouchableOpacity
            onPress={toggleCheck}
            hitSlop={{top: 20, bottom: 20}}>
            {isChecked ? (
              <Check width={16} height={16} />
            ) : (
              <UnCheck width={16} height={16} />
            )}
          </TouchableOpacity>
          <styles.CheckBox>자동 로그인</styles.CheckBox>
          {error && <styles.ErrorMessage>{error}</styles.ErrorMessage>}
        </styles.CheckContainer>
      </styles.Box>
      <styles.SigninButtonTop />
      <TouchableOpacity>
        <styles.Box>
          <TouchableOpacity onPress={handleSignin}>
            <styles.SigninBox>
              <styles.SigninButton>LOGIN</styles.SigninButton>
            </styles.SigninBox>
          </TouchableOpacity>
        </styles.Box>
      </TouchableOpacity>
    </View>
  );
};

export default SigninButton;
