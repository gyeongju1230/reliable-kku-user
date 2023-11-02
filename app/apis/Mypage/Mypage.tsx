import {BASE_API} from '@/apis/common/CommonApi';

/* 사용자 정보가져오기 */
export const MypageMember = () =>
  BASE_API.get(`/api/v1/my-pages/member`, {})
    .then(response => response.data)

    .catch(error => {
      console.log('마이페이지 정보 가져오기 실패:', error.response.data);
      console.log('=======', error);
      console.log('=======', error.response);
      throw error;
    });

/* 로그아웃 */
export const Logout = () => {
  BASE_API.get(`/api/v1/my-pages/logout`)
    .then(response => response.data)

    .catch(error => {
      console.log('로그아웃 실패: ', error);
      throw error;
    });
};

/* 회원탈퇴 */
export const Withdraw = () => {
  BASE_API.patch(`/api/v1/my-pages/withdraw`)
    .then(response => response.data)

    .catch(error => {
      console.log('탈퇴 실패: ', error);
      throw error;
    });
};
