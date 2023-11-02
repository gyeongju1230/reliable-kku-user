import {BASE_API} from '@/apis/common/CommonApi';

export const MypageMember = () =>
  BASE_API.get(`/api/v1/my-pages/member`, {})
    .then(response => response.data)

    .catch(error => {
      console.log('마이페이지 정보 가져오기 실패:', error.response.data);
      throw error;
    });
