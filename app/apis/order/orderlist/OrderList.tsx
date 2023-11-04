import {BASE_API} from '@/apis/common/CommonApi';

export const OrderPastList = async () => {
  try {
    return BASE_API.get(`/api/v1/order/past`)
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
