import * as styles from '@components/pages/mypage/mypage-name/MypageName.style';
import MoreButton from '@assets/images/mypage/MoreButton.svg';
import {
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MarginTop from '@components/common/MarginTop';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import CloseButton from '@assets/icons/common/CloseButton.svg';

const MypageName = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [isModal, setIsModal] = useState(false);
  const [isPasswordModal, setIsPasswordModal] = useState(false);
  const [isSecessionModal, setIsSecessionModal] = useState(false);

  const openModal = () => {
    setIsModal(!isModal);
  };

  const closeModal = () => {
    navigation.navigate('ChangePassword');
    setIsModal(false);
  };

  const openPasswordModal = () => {
    setIsPasswordModal(!isPasswordModal);
    setIsModal(false);
  };

  const closePasswordModal = () => {
    setIsPasswordModal(false);
  };

  const openSecessionModal = () => {
    setIsSecessionModal(!isSecessionModal);
    setIsModal(false);
  };

  const closeSecessionModal = () => {
    setIsSecessionModal(false);
  };

  return (
    <styles.NameContainer>
      <styles.NameBox>
        <styles.Name>든붕이님,</styles.Name>
        <styles.NameContent>안녕하세요!</styles.NameContent>
      </styles.NameBox>
      <TouchableOpacity onPress={openModal}>
        <MoreButton width={24} height={24} style={{marginLeft: '2.4%'}} />
      </TouchableOpacity>
      <Modal
        visible={isModal}
        onRequestClose={() => setIsModal(false)}
        transparent={true}
        animationType="slide">
        <Pressable style={{flex: 1}} onPress={() => setIsModal(false)}>
          <styles.ModalContainer>
            <TouchableOpacity onPress={closeModal}>
              <styles.ModalContentBox>
                <styles.ModalContent>비밀번호 변경</styles.ModalContent>
              </styles.ModalContentBox>
            </TouchableOpacity>
            <TouchableOpacity onPress={openPasswordModal}>
              <styles.ModalContentBox>
                <styles.ModalContent>로그아웃</styles.ModalContent>
              </styles.ModalContentBox>
            </TouchableOpacity>
            <TouchableOpacity onPress={openSecessionModal}>
              <styles.ModalContentBox>
                <styles.ModalContent>회원탈퇴</styles.ModalContent>
              </styles.ModalContentBox>
            </TouchableOpacity>
          </styles.ModalContainer>
        </Pressable>
      </Modal>
      <Modal visible={isPasswordModal} transparent={true} animationType="slide">
        <Pressable
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#0000004d',
          }}>
          <styles.ModalBox>
            <TouchableOpacity onPress={closePasswordModal}>
              <styles.CloseButtonBox>
                <CloseButton width={20} height={20} />
              </styles.CloseButtonBox>
            </TouchableOpacity>
            <styles.ModalText>정말 로그아웃 하시겠습니까?</styles.ModalText>
            <styles.ModalButtonBox>
              <TouchableOpacity>
                <styles.ModalYesButton>
                  <styles.ModalButtonText>예</styles.ModalButtonText>
                </styles.ModalYesButton>
              </TouchableOpacity>
              <TouchableOpacity onPress={closePasswordModal}>
                <styles.ModalNoButton>
                  <styles.ModalButtonText>아니오</styles.ModalButtonText>
                </styles.ModalNoButton>
              </TouchableOpacity>
            </styles.ModalButtonBox>
          </styles.ModalBox>
        </Pressable>
      </Modal>

      <Modal
        visible={isSecessionModal}
        transparent={true}
        animationType="slide">
        <Pressable
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#0000004d',
          }}>
          <styles.ModalBox>
            <TouchableOpacity onPress={closeSecessionModal}>
              <styles.CloseButtonBox>
                <CloseButton width={20} height={20} />
              </styles.CloseButtonBox>
            </TouchableOpacity>
            <styles.ModalText>정말 탈퇴하시겠습니까?</styles.ModalText>
            <styles.ModalButtonBox>
              <TouchableOpacity>
                <styles.ModalYesButton>
                  <styles.ModalButtonText>예</styles.ModalButtonText>
                </styles.ModalYesButton>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeSecessionModal}>
                <styles.ModalNoButton>
                  <styles.ModalButtonText>아니오</styles.ModalButtonText>
                </styles.ModalNoButton>
              </TouchableOpacity>
            </styles.ModalButtonBox>
          </styles.ModalBox>
        </Pressable>
      </Modal>
    </styles.NameContainer>
  );
};

export default MypageName;
