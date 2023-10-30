import * as styles from '@components/pages/mypage/mypage-change-password/mypage-change-password-button/MypageChangePasswordButton.style';
import {Modal, TouchableOpacity} from 'react-native';
import MarginTop from '@components/common/MarginTop';
import CloseButton from '@assets/icons/common/CloseButton.svg';
import SignupSuccessLogo from '@assets/images/signup/SignupSuccessLogo.svg';
import React, {useState} from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const MypageChangePasswordButton = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <styles.Box>
      <TouchableOpacity onPress={toggleModal}>
        <styles.ButtonContainer>
          <styles.ButtonContent>변경하기</styles.ButtonContent>
        </styles.ButtonContainer>
      </TouchableOpacity>
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
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
