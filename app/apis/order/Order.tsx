import {BASE_API} from '@/apis/common/CommonApi';
import {err} from 'react-native-svg/lib/typescript/xml';

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
