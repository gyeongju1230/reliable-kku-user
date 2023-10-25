import * as styles from '@components/pages/find-password/find-password-button/FindPasswordButton.style';
import {Modal, TouchableOpacity, View} from 'react-native';
import MarginTop from '@components/common/MarginTop';
import CloseButton from '@assets/icons/common/CloseButton.svg';
import SignupSuccessLogo from '@assets/images/signup/SignupSuccessLogo.svg';
import React, {useState} from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const FindPasswordButton = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <styles.Box>
      <TouchableOpacity onPress={toggleModal}>
        <styles.ButtonContainer>
          <styles.ButtonContent>임시 비밀번호 전송</styles.ButtonContent>
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
                <styles.Content numberOfLines={2}>
                  임시 비밀번호 전송이{'\n'}완료되었습니다.
                </styles.Content>
              </styles.ContentBox>
            </styles.ContentContainer>
          </styles.ModalLayout>
        </styles.ModalContainer>
      </Modal>
    </styles.Box>
  );
};

export default FindPasswordButton;
