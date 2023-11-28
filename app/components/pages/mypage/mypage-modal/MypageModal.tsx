import * as styles from '@components/pages/mypage/mypage-modal/MypageModal.style';
import InquiryIcon from '@assets/images/mypage/Inquiry.svg';
import TermsIcon from '@assets/images/mypage/Terms.svg';
import BusinessIcon from '@assets/images/mypage/Business.svg';
import {Linking, Modal, Text, TouchableOpacity} from 'react-native';
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
  const [isModal, setIsModal] = useState(false);
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const openInquiryModal = () => {
    setIsInquiryModal(!isInquiryModal);
  };

  const closeInquiryModal = () => {
    setIsInquiryModal(false);
  };

  const openModal = () => {
    setIsModal(!isModal);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <styles.Box>
      <TouchableOpacity
        onPress={openInquiryModal}
        hitSlop={{top: 20, bottom: 20}}>
        <styles.InquiryBox>
          <InquiryIcon
            width={16}
            height={16}
            style={{alignSelf: 'center', marginBottom: '10%'}}
          />
          <styles.Content>문의하기</styles.Content>
        </styles.InquiryBox>
      </TouchableOpacity>
      <styles.LineBox1 />
      <TouchableOpacity
        onPress={() => navigation.navigate('TermsMypage')}
        hitSlop={{top: 20, bottom: 20}}>
        <styles.TermsBox>
          <TermsIcon
            width={16}
            height={16}
            style={{
              alignSelf: 'center',
              marginBottom: '10%',
            }}
          />
          <styles.Content>이용약관</styles.Content>
        </styles.TermsBox>
      </TouchableOpacity>
      <styles.LineBox2 />
      <TouchableOpacity onPress={openModal} hitSlop={{top: 20, bottom: 20}}>
        <styles.BusinessBox>
          <BusinessIcon
            width={16}
            height={16}
            style={{alignSelf: 'center', marginBottom: '10%'}}
          />
          <styles.Content>사업자정보</styles.Content>
        </styles.BusinessBox>
      </TouchableOpacity>
      <Modal visible={isInquiryModal} transparent={true} animationType="none">
        <styles.InquiryModalContainer>
          <styles.InquiryModalLayout>
            <MarginTop height={6} />
            <TouchableOpacity
              onPress={closeInquiryModal}
              hitSlop={{top: 20, bottom: 20}}>
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

      <Modal visible={isModal} transparent={true} animationType="none">
        <styles.ModalContainer>
          <styles.ModalLayout>
            <MarginTop height={6} />
            <TouchableOpacity
              onPress={closeModal}
              hitSlop={{top: 20, bottom: 20}}>
              <styles.CloseModalButtonBox>
                <CloseButton width={20} height={20} />
              </styles.CloseModalButtonBox>
            </TouchableOpacity>
            <styles.ModalContentBold>
              든든하KU | 황보예준
            </styles.ModalContentBold>
            <styles.ModalContent>
              사업자등록번호{' '}
              <Text style={{fontWeight: '600'}}>701-41-00862</Text>
            </styles.ModalContent>
            <styles.ModalContent>
              사업장주소{' '}
              <Text style={{fontWeight: '600'}}>
                충청북도 충주시 충열 5길 27, 1층
              </Text>
            </styles.ModalContent>
            <styles.ModalContent>
              휴대폰번호 <Text style={{fontWeight: '600'}}>010-5738-5458</Text>
            </styles.ModalContent>
          </styles.ModalLayout>
        </styles.ModalContainer>
      </Modal>
    </styles.Box>
  );
};

export default MypageModal;
