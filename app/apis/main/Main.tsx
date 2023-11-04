import {BASE_API} from '@/apis/common/CommonApi';

/* 주문이 현재 진행중인지 확인 */
export const OrderDuplicate = () => {
  return BASE_API.get(`/api/v1/order/duplicate`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    })
    .catch(err => {});
};

/* 현재 주문 시 예상시간 */
export const LeftTime = async () => {
  try {
    const response = await BASE_API.get(`/api/v1/order/left-time`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
