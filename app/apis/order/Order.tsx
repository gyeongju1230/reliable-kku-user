import {BASE_API} from '@/apis/common/CommonApi';
import {err} from 'react-native-svg/lib/typescript/xml';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* 메뉴 리스트 반환 */
export const OrderMenuList = async () => {
  try {
    return BASE_API.get(`/api/v1/menu`)
      .then(response => {
        console.log('메뉴리스트 가져오기 성공', response.data);
        return response.data;
      })
      .catch(error => {
        console.log('메뉴 리스트 가져오기 실패', error);
        throw error;
      });
  } catch (error) {
    throw error;
  }
};

/* 가게 영업유무 */
export const StoresOpenClosed = () =>
  BASE_API.get(`/api/v1/stores/open-closed`, {})
    .then(response => response.data)

    .catch(error => {
      console.log('가게 영업유무 확인 실패:', error.response.data);
      throw error;
    });

/* 결제 승인 */
export const PaymentConfirm = async (
  paymentKey: string,
  orderId: string,
  amount: number,
) => {
  try {
    const response = await BASE_API.post(
      '/api/v1/payments/confirm',
      {
        paymentKey: paymentKey,
        orderId: orderId,
        amount: amount,
      },
      {},
    ).then(response => {
      console.log('결제승인 성공', response.data);
      return response;
    });
  } catch (error) {
    throw error;
  }
};

/* 주문 저장 */
export const OrderSave = async (
  tossOrderId: string,
  orderPrice: number,
  registeredMenus: Array<{count: number; menuId: number}>,
) => {
  try {
    const response = await BASE_API.post('/api/v1/order', {
      tossOrderId: tossOrderId,
      orderPrice: orderPrice,
      registeredMenus: registeredMenus,
    });
    await AsyncStorage.setItem('orderId', response.data.id.toString());

    return response.data.id;
  } catch (error) {
    throw error;
  }
};

interface OrderDetailList {
  totalPrice: number;
  username: string;
  orderMenuList: {name: string; count: number}[];
}

/* 주문 상세정보 반환 */
export const OrderDetailList = async (orderId: number) => {
  try {
    return BASE_API.get<OrderDetailList>(`/api/v1/order/${orderId}`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  } catch (error) {
    throw error;
  }
};

/* 주문 취소 */
export const OrderCanceled = (orderId: number) =>
  BASE_API.delete(`/api/v1/order/${orderId}`, {})
    .then(response => response.data)
    .catch(error => {
      console.log('주문취소 실패: ', error.response.data);
      throw error;
    });
