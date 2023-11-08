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
    .catch(error => {});
};

/* 회원탈퇴 */
export const Withdraw = () => {
  BASE_API.patch(`/api/v1/my-pages/withdraw`)
    .then(response => response.data)

    .catch(error => {});
};

/* 현재 비밀번호 확인 */
export const VerifyCurrentPassword = async (password: string) => {
  try {
    const response = await BASE_API.post(
      '/api/v1/my-pages/change-password/verify-current-password',
      {
        password: password,
      },
      {},
    );
    console.log('현재 비밀번호 확인 성공', response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/* 비밀번호 변경 */
export const PasswordChange = async (password: string) => {
  try {
    const response = await BASE_API.patch(
      '/api/v1/my-pages/change-password',
      {
        password: password,
      },
      {},
    ).then(response => {
      console.log('비밀번호 변경 성공', response.data);
      return response;
    });
  } catch (error) {
    throw error;
  }
};
