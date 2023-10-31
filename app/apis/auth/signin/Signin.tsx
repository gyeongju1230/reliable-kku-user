import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dev.deunku.com',
  withCredentials: true,
});

export const Signin = async (phoneNumber: string, password: string) => {
  try {
    const response = await axiosInstance
      .post(
        '/api/v1/auth/login',
        {
          phoneNumber: phoneNumber,
          password: password,
        },
        {},
      )
      .then(response => {
        console.log('로그인 성공', response);
        return response;
      });
  } catch (error) {
    throw error;
  }
};
