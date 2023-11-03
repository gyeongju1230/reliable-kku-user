import {BASE_API} from '@/apis/common/CommonApi';

/* 주문이 현재 진행중인지 확인 */
export const OrderDuplicate = () => {
  BASE_API.get(`/api/v1/order/duplicate`)
    .then(response => response.data)

    .catch(error => {
      console.log('현재 진행중인 order 없음!: ', error);
      throw error;
    });
};
