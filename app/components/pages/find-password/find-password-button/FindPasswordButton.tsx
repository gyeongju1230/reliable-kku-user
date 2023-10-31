import * as styles from '@components/pages/find-password/find-password-button/FindPasswordButton.style';
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
import {PasswordIssue} from '@/apis/auth/find-password/FindPassword';

interface FindPasswordButtonProps {
  isPhoneNumber: string;
  isCertificationNumber: string;
  isCertificationSuccess: boolean;
}

const FindPasswordButton = ({
  isPhoneNumber,
  isCertificationNumber,
  isCertificationSuccess,
}: FindPasswordButtonProps) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handlePasswordIssue = async () => {
    try {
      await PasswordIssue(isPhoneNumber, Number(isCertificationNumber));
      setSuccess('임시 비밀번호 전송이\n완료되었습니다.');
      setError('');
      toggleModal();
    } catch (error) {
      console.error('임시 비밀번호 발급 실패', error);
      console.log('>>>>>>', isPhoneNumber, isCertificationNumber);
      setError('잘못된 요청입니다.');
      setSuccess('');
      toggleModal();
    }
  };
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <styles.Box>
      <TouchableOpacity onPress={handlePasswordIssue}>
        <styles.ButtonContainer
          style={{
            backgroundColor: isCertificationSuccess ? '#FFCA42' : '#d9d9d9',
          }}>
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
                  {success ? success : error}
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
