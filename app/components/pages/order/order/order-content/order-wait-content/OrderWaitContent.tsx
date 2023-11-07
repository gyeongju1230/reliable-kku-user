import * as styles from '@components/pages/order/order/order-content/order-wait-content/OrderWaitContent.style';
import {Modal, TouchableOpacity} from 'react-native';
import WaitContentImage from '@assets/images/order/WaitContentImage.svg';
import React, {useEffect, useState} from 'react';
import {OrderCanceled} from '@/apis/order/Order';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MarginTop from '@components/common/MarginTop';
import CloseButton from '@assets/icons/common/CloseButton.svg';

const OrderWaitContent = () => {
  const [moveLeftRight, setMoveLeftRight] = useState('-15deg');
  const [orderId, setOrderId] = useState('');
  const [isOrderCanceledModal, setIsOrderCanceledModal] = useState(false);

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

  const openOrderCanceledModal = () => {
    setIsOrderCanceledModal(true);
  };

  const closeOrderCanceledModal = () => {
    setIsOrderCanceledModal(false);
  };

  useEffect(() => {
    AsyncStorage.getItem('orderId').then(id => {
      console.log('AsyncStorage orderId: ', id);
      if (id) {
        setOrderId(id);
      }
    });
  }, []);
  const handleOrderCanceled = () => {
    OrderCanceled(Number(orderId))
      .then(response => {
        console.log('주문취소 성공: ', response);
      })
      .catch(error => {
        console.error('주문 취소 실패: ');
      });
  };

  return (
    <styles.Box>
      <styles.ContentContainer>
        <styles.ContentBox>
          <styles.ContentTitle>주문 대기중</styles.ContentTitle>
          <styles.ContentBold>
            매장에서 주문을 확인 중입니다...
          </styles.ContentBold>
          <styles.Content>
            주문이 확인되기 전까지는 취소가 가능합니다.
          </styles.Content>
        </styles.ContentBox>
        <TouchableOpacity onPress={openOrderCanceledModal}>
          <styles.Button>
            <styles.ButtonContent>취소</styles.ButtonContent>
          </styles.Button>
        </TouchableOpacity>
      </styles.ContentContainer>
      <WaitContentImage
        width="56.321839%"
        height="56.321839%"
        style={{
          top: '5.3333333%',
          left: '50.2837838%',
          transform: [{rotate: moveLeftRight}],
        }}
      />

      <Modal
        visible={isOrderCanceledModal}
        transparent={true}
        animationType="none">
        <styles.OrderCanceledModalContainer>
          <styles.OrderCanceledModalBox>
            <MarginTop height={6} />
            <TouchableOpacity onPress={closeOrderCanceledModal}>
              <styles.CloseButtonBox>
                <CloseButton width={20} height={20} />
              </styles.CloseButtonBox>
            </TouchableOpacity>
            <styles.OrderCancledModalContent>
              주문을 취소하시겠습니까?
            </styles.OrderCancledModalContent>
            <styles.OrderCancledModalButtonBox>
              <TouchableOpacity onPress={handleOrderCanceled}>
                <styles.OrderCancledModalButtonYes>
                  <styles.OrderCancledModalButtonContent>
                    예
                  </styles.OrderCancledModalButtonContent>
                </styles.OrderCancledModalButtonYes>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeOrderCanceledModal}>
                <styles.OrderCancledModalButtonNo>
                  <styles.OrderCancledModalButtonContent>
                    아니오
                  </styles.OrderCancledModalButtonContent>
                </styles.OrderCancledModalButtonNo>
              </TouchableOpacity>
            </styles.OrderCancledModalButtonBox>
          </styles.OrderCanceledModalBox>
        </styles.OrderCanceledModalContainer>
      </Modal>
    </styles.Box>
  );
};

export default OrderWaitContent;
