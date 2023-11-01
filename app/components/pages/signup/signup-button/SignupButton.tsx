import * as styles from '@components/pages/signup/signup-button/SignupButton.style';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CloseButton from '@assets/icons/common/CloseButton.svg';
import SignupSuccessLogo from '@assets/images/signup/SignupSuccessLogo.svg';
import MarginTop from '@components/common/MarginTop';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {IsSignup} from '@/apis/auth/signup/Signup';

interface SignupButtonProps {
  isName: string;
  isPhoneNumber: string;
  password: string;
  passwordSuccess: boolean;
  passwordVerifySuccess: boolean;
  isCertificationSuccess: boolean;
  isCertificationCheckSuccess: boolean;
}

const SignupButton = ({
  isName,
  isPhoneNumber,
  password,
  passwordSuccess,
  passwordVerifySuccess,
  isCertificationSuccess,
  isCertificationCheckSuccess,
}: SignupButtonProps) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(
      !!isName &&
        !!isPhoneNumber &&
        !!password &&
        passwordSuccess &&
        passwordVerifySuccess &&
        isCertificationSuccess &&
        isCertificationCheckSuccess,
    );
  }, [
    isName,
    isPhoneNumber,
    password,
    passwordSuccess,
    passwordVerifySuccess,
    isCertificationSuccess,
    isCertificationCheckSuccess,
  ]);

  const handleSignup = async () => {
    try {
      await IsSignup(isName, isPhoneNumber, password);
      toggleModal();
    } catch (error) {
      console.error('임시 비밀번호 발급 실패', error);
    }
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <styles.Box>
      <TouchableOpacity onPress={handleSignup} disabled={!isActive}>
        <styles.ButtonContainer
          style={{backgroundColor: isActive ? '#FFCA42' : '#d9d9d9'}}>
          <styles.ButtonContent>회원가입 완료</styles.ButtonContent>
        </styles.ButtonContainer>
      </TouchableOpacity>
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <styles.ModalContainer>
          <styles.ModalLayout>
            <MarginTop height={6} />
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
              <styles.CloseButtonBox>
                <CloseButton width={20} height={20} />
              </styles.CloseButtonBox>
            </TouchableOpacity>
            <styles.ContentContainer>
              <styles.ImageBox>
                <SignupSuccessLogo width={40} height={40} />
              </styles.ImageBox>
              <styles.ContentBox>
                <styles.Content>회원가입이 완료되었습니다.</styles.Content>
              </styles.ContentBox>
            </styles.ContentContainer>
          </styles.ModalLayout>
        </styles.ModalContainer>
      </Modal>
    </styles.Box>
  );
};

export default SignupButton;
