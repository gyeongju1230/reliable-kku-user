import * as styles from '@components/pages/order/order/order-layout/OrderLayout.style';
import OrderWaitContent from '@components/pages/order/order/order-content/order-wait-content/OrderWaitContent';
import OrderReceiptContent from '@components/pages/order/order/order-content/order-receipt-content/OrderReceiptContent';
import OrderCompleteContent from '@components/pages/order/order/order-content/order-complete-content/OrderCompleteContent';
import OrderCompletePickupContent from '@components/pages/order/order/order-content/order-complete-content/order-complete-pickup-content/OrderCompletePickupContent';
import OrderList from '@components/pages/order/order/order-list/OrderList';
import {Modal, TouchableOpacity} from 'react-native';
import CloseButton from '@assets/icons/common/CloseButton.svg';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useRef, useState} from 'react';
import EventSource, {EventSourceListener} from 'react-native-sse';

interface SSEProps {
  orderStatus:
    | 'WAIT'
    | 'COOKING'
    | 'PICKUP'
    | 'FINISH'
    | 'CANCELED'
    | 'NOT_TAKE';
  leftMinutes: number;
}

const OrderLayout = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [orderTrue, setOrderTrue] = useState(false);
  const [orderId, setOrderId] = useState('');

  const [orderStatus, setOrderStatus] = useState<
    'WAIT' | 'COOKING' | 'PICKUP' | 'FINISH' | 'CANCELED' | 'NOT_TAKE'
  >('WAIT');
  const [leftMinutes, setLeftMinutes] = useState<number>(0);
  const es = useRef<EventSource | null>(null);

  useEffect(() => {
    AsyncStorage.getItem('OrderTrue').then(value => {
      if (value === 'true') {
        setOrderTrue(true);
      } else {
        setOrderTrue(false);
      }
    });

    AsyncStorage.getItem('orderId').then(id => {
      console.log('AsyncStorage orderId: ', id);
      if (id) {
        setOrderId(id);
      }
    });
  }, []);

  useEffect(() => {
    if (orderId) {
      es.current = new EventSource(
        `https://dev.deunku.com/api/v1/order/sse/connect?orderId=${orderId}`,
        {
          withCredentials: true,
          pollingInterval: 3000,
          timeout: 0,
        },
      );
    }
  }, [orderId]);

  useEffect(() => {
    if (es.current && orderId) {
      const listener: EventSourceListener = event => {
        if (event.type === 'open') {
          console.log('Open SSE connection.');
        } else if (event.type === 'message') {
          let data: SSEProps;

          if (event.data != null) {
            data = JSON.parse(event.data);
            console.log(data.orderStatus);
            console.log(data.leftMinutes);

            setOrderStatus(data.orderStatus);
            setLeftMinutes(data.leftMinutes);
          }
        } else if (event.type === 'error') {
        } else if (event.type === 'exception') {
        }
      };

      es.current.addEventListener('open', listener);
      es.current.addEventListener('message', listener);
      es.current.addEventListener('error', listener);

      return () => {
        if (es.current) {
          es.current.removeAllEventListeners();
          es.current.close();
        }
      };
    }
  }, [orderId]);

  const renderContentBasedOnOrderStatus = () => {
    switch (orderStatus) {
      case 'WAIT':
        return <OrderWaitContent />;
      case 'COOKING':
        return <OrderReceiptContent leftMinutes={leftMinutes} />;
      case 'PICKUP':
        return <OrderCompleteContent />;
      case 'FINISH':
        return <OrderCompletePickupContent />;
      case 'CANCELED':
      case 'NOT_TAKE':
        navigation.navigate('홈');
        break;
      default:
        return null;
    }
  };

  const handleOnPressCloseButton = () => {
    AsyncStorage.removeItem('OrderTrue')
      .then(() => {
        setOrderTrue(false);
        console.log('OrderTrue', orderTrue);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    navigation.navigate('홈');
  };

  return (
    <styles.Box>
      <styles.Top />
      {orderTrue && (
        <TouchableOpacity onPress={handleOnPressCloseButton}>
          <CloseButton
            width={30}
            height={30}
            style={{
              marginTop: '-15%',
              marginLeft: '4%',
            }}
          />
        </TouchableOpacity>
      )}
      <styles.Container>
        <styles.OrderBox>
          <styles.OrderBoxTop />
          {renderContentBasedOnOrderStatus()}
        </styles.OrderBox>
        <styles.CotentBox>
          <styles.Content>
            결제 완료 이후 표시되는 예상 시간과 일부 차이가 있을 수 있습니다.
          </styles.Content>
        </styles.CotentBox>
        <styles.OrderListBox>
          <styles.OrderListTop />
          <OrderList />
        </styles.OrderListBox>
      </styles.Container>
    </styles.Box>
  );
};

export default OrderLayout;
