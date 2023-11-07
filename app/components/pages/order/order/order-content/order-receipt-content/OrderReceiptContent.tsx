import * as styles from '@components/pages/order/order/order-content/order-receipt-content/OrderReceiptContent.style';
import {Linking, Modal, TouchableOpacity, View} from 'react-native';
import ReceiptContentTmage from '@assets/images/order/ReciptContentImage.svg';
import RefreshButton from '@assets/images/order/Refresh.svg';
import ReceiptBar from '@assets/images/order/ReceiptBar.svg';
import OrderIcon from '@assets/images/order/OrderIcon.svg';
import React, {useEffect, useState} from 'react';
import MarginTop from '@components/common/MarginTop';
import CloseButton from '@assets/icons/common/CloseButton.svg';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import ExclamationIcon from '@assets/images/order/Exclamation.svg';
import ProfilButton from '@assets/images/order/ProfilButton.svg';

interface LeftMinutesProps {
  leftMinutes: number;
}

const OrderReceiptContent = ({leftMinutes}: LeftMinutesProps) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [moveLeftRight, setMoveLeftRight] = useState('-15deg');
  const [isDelayeModal, setIsDelayeModal] = useState(false);

  const openDelayeModal = () => {
    if (leftMinutes <= 0) {
      setIsDelayeModal(true);
    } else {
      setIsDelayeModal(false);
    }
  };

  useEffect(() => {
    openDelayeModal();
  }, [leftMinutes]);

  const move = () => {
    moveLeftRight === '15deg'
      ? setMoveLeftRight('-15deg')
      : setMoveLeftRight('15deg');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      move();
    }, 1000);

    return () => clearTimeout(timer);
  }, [moveLeftRight]);

  return (
    <styles.Box>
      <styles.ContentContainer>
        <styles.ContentBox>
          <styles.ContentTitle>예상 완료 시간</styles.ContentTitle>
          <styles.Content>
            붕어들이 열심히 구워지고 있어요.{'\n'}
            우리 곧 만나요!
          </styles.Content>
        </styles.ContentBox>
        <styles.ButtonBox>
          <TouchableOpacity>
            <styles.Button>
              <styles.ButtonContent>
                {leftMinutes <= 0 ? '0분' : `${leftMinutes}분`}
              </styles.ButtonContent>
            </styles.Button>
            <RefreshButton
              width={39}
              height={39}
              style={{
                position: 'absolute',
                top: '58.6956522%',
                left: '57%',
              }}
            />
          </TouchableOpacity>
        </styles.ButtonBox>
      </styles.ContentContainer>

      <ReceiptContentTmage
        width="45.6081081%"
        height="60%"
        style={{
          top: '-9.7777778%',
          left: '27.3648649%',
        }}
      />
      <styles.BarContainer>
        <ReceiptBar width="100%" height="30%" style={{top: '28%'}} />
        <OrderIcon
          width={50}
          height={50}
          style={{
            position: 'absolute',
            left: '7.06756757%',
            transform: [{rotate: moveLeftRight}],
          }}
        />
        <styles.BarContentBox>
          <styles.BarContent>접수</styles.BarContent>
          <styles.BarContent>조리완료</styles.BarContent>
          <styles.BarContent>픽업완료</styles.BarContent>
        </styles.BarContentBox>
      </styles.BarContainer>
      <Modal visible={isDelayeModal} transparent={true} animationType="none">
        <styles.DelayeModalContainer>
          <styles.DelayeModalBox>
            <MarginTop height={6} />
            <TouchableOpacity onPress={() => navigation.navigate('홈')}>
              <styles.CloseButtonBox>
                <CloseButton width={20} height={20} />
              </styles.CloseButtonBox>
            </TouchableOpacity>
            <styles.DelayeModalContentBoldBox>
              <styles.DelayeModalContentBold>
                주문이 지연되고 있습니다
              </styles.DelayeModalContentBold>
              <ExclamationIcon width={18} height={26} />
            </styles.DelayeModalContentBoldBox>
            <styles.DelayeModalContent>
              문의사항은 인스타 dm으로 부탁드립니다.
            </styles.DelayeModalContent>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.instagram.com/ku_meal_kit/')
              }>
              <styles.DelayeModalButton>
                <ProfilButton width={140} height={26} />
              </styles.DelayeModalButton>
            </TouchableOpacity>
          </styles.DelayeModalBox>
        </styles.DelayeModalContainer>
      </Modal>
    </styles.Box>
  );
};

export default OrderReceiptContent;
