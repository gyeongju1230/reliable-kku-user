import {BASE_API} from '@/apis/common/CommonApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      console.log('로그인 성공', response.headers.authorization);

      AsyncStorage.setItem('accessToken', response.headers.authorization);
      return response;
    });
  } catch (error) {
    throw error;
  }
};
