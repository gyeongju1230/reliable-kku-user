import {BASE_API} from '@/apis/common/CommonApi';

export const Signin = async (phoneNumber: string, password: string) => {
  try {
    const response = await BASE_API.post(
      '/api/v1/auth/login',
      {
        phoneNumber: phoneNumber,
        password: password,
      },
      {},
    ).then(response => {
      console.log('로그인 성공', response);
      return response;
    });
  } catch (error) {
    throw error;
  }
};
