import * as styles from '@components/pages/mypage/mypage-change-password/mypage-change-password-button/MypageChangePasswordButton.style';
import {Alert, Modal, TouchableOpacity} from 'react-native';
import MarginTop from '@components/common/MarginTop';
import CloseButton from '@assets/icons/common/CloseButton.svg';
import SignupSuccessLogo from '@assets/icons/common/SuccessLogo.svg';
import React, {useEffect, useState} from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {PasswordChange} from '@/apis/Mypage/Mypage';

interface MypageChangePasswordButtonProps {
  password: string;
  currentSuccess: boolean;
  passSuccess: boolean;
  verifySuccess: boolean;
}

const MypageChangePasswordButton = ({
  password,
  currentSuccess,
  passSuccess,
  verifySuccess,
}: MypageChangePasswordButtonProps) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(currentSuccess && passSuccess && verifySuccess);
  }, [currentSuccess, passSuccess, verifySuccess]);

  const handlePasswordChange = async () => {
    try {
      await PasswordChange(password);
      toggleModal();
    } catch (error) {
      console.error('비밀번호 변경 실패', error);

      Alert.alert('앗!', '로그인이 만료되었습니다.', [
        {
          text: '확인',
          onPress: () => {
            navigation.navigate('Signin');
            console.log('로그인 페이지로 이동');
          },
        },
      ]);
    }
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <styles.Box>
      <TouchableOpacity onPress={handlePasswordChange} disabled={!isActive}>
        <styles.ButtonContainer
          style={{backgroundColor: isActive ? '#FFCA42' : '#d9d9d9'}}>
          <styles.ButtonContent>변경하기</styles.ButtonContent>
        </styles.ButtonContainer>
      </TouchableOpacity>
      <Modal visible={isModalVisible} transparent={true} animationType="none">
        <styles.ModalContainer>
          <styles.ModalLayout>
            <MarginTop height={6} />
            <TouchableOpacity onPress={() => navigation.navigate('My붕')}>
              <styles.CloseButtonBox>
                <CloseButton width={20} height={20} />
              </styles.CloseButtonBox>
            </TouchableOpacity>
            <styles.ContentContainer>
              <styles.ImageBox>
                <SignupSuccessLogo width={40} height={40} />
              </styles.ImageBox>
              <styles.ContentBox>
                <styles.Content numberOfLines={2}>
                  변경되었습니다.
                </styles.Content>
              </styles.ContentBox>
            </styles.ContentContainer>
          </styles.ModalLayout>
        </styles.ModalContainer>
      </Modal>
    </styles.Box>
  );
};

export default MypageChangePasswordButton;
