import * as styles from '@components/pages/signup/signup-button/SignupButton.style';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CloseButton from '@assets/icons/common/CloseButton.svg';
import SignupSuccessLogo from '@assets/images/signup/SignupSuccessLogo.svg';
import MarginTop from '@components/common/MarginTop';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const SignupButton = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleModal}>
        <styles.ButtonContainer>
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
    </View>
  );
};

export default SignupButton;
