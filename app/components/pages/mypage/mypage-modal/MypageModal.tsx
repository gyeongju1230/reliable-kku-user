import * as styles from '@components/pages/mypage/mypage-modal/MypageModal.style';
import InquiryIcon from '@assets/images/mypage/Inquiry.svg';
import TermsIcon from '@assets/images/mypage/Terms.svg';
import {Linking, Modal, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MarginTop from '@components/common/MarginTop';
import CloseButton from '@assets/icons/common/CloseButton.svg';
import InstagramIcon from '@assets/images/mypage/Instagram.svg';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const MypageModal = () => {
  const [isInquiryModal, setIsInquiryModal] = useState(false);
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const openInquiryModal = () => {
    setIsInquiryModal(!isInquiryModal);
  };

  const closeInquiryModal = () => {
    setIsInquiryModal(false);
  };

  return (
    <styles.Box>
      <TouchableOpacity onPress={openInquiryModal}>
        <styles.InquiryBox>
          <InquiryIcon
            width={16}
            height={16}
            style={{alignSelf: 'center', marginBottom: '10%'}}
          />
          <styles.Content>문의하기</styles.Content>
        </styles.InquiryBox>
      </TouchableOpacity>
      <styles.LineBox></styles.LineBox>
      <TouchableOpacity onPress={() => navigation.navigate('TermsMypage')}>
        <styles.TermsBox>
          <TermsIcon
            width={16}
            height={16}
            style={{alignSelf: 'center', marginBottom: '10%'}}
          />
          <styles.Content>이용약관</styles.Content>
        </styles.TermsBox>
      </TouchableOpacity>
      <Modal visible={isInquiryModal} transparent={true} animationType="none">
        <styles.InquiryModalContainer>
          <styles.InquiryModalLayout>
            <MarginTop height={6} />
            <TouchableOpacity onPress={closeInquiryModal}>
              <styles.CloseButtonBox>
                <CloseButton width={20} height={20} />
              </styles.CloseButtonBox>
            </TouchableOpacity>
            <styles.InquiryModalContent>
              궁금한 점은 DM으로 문의 바랍니다.
            </styles.InquiryModalContent>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.instagram.com/ku_meal_kit/')
              }>
              <styles.InquiryModalButton>
                <styles.InquiryModalButtonContent>
                  <InstagramIcon width={16} height={16} />
                  <styles.InquiryModalButtonText>
                    프로필 바로가기
                  </styles.InquiryModalButtonText>
                </styles.InquiryModalButtonContent>
              </styles.InquiryModalButton>
            </TouchableOpacity>
          </styles.InquiryModalLayout>
        </styles.InquiryModalContainer>
      </Modal>
    </styles.Box>
  );
};

export default MypageModal;
