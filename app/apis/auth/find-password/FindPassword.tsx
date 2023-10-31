import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dev.deunku.com',
  withCredentials: true,
});

/* 인증번호 전송 */
export const FindPassword = async (phoneNumber: string) => {
  try {
    const response = await axiosInstance
      .post(
        '/api/v1/register/phone-number/certification-number',
        {
          phoneNumber: phoneNumber,
        },
        {},
      )
      .then(response => {
        console.log('인증번호 전송 성공', response.data);
        return response;
      });
  } catch (error) {
    throw error;
  }
};

/* 인증번호 확인 */
export const Certification = async (
  phoneNumber: string,
  certificationNumber: Number,
) => {
  try {
    return axiosInstance
      .get(
        `/api/v1/find-password/phone-number/certification-number?phoneNumber=${phoneNumber}&certificationNumber=${certificationNumber}`,
      )
      .then(response => {
        console.log('인증번호 확인 성공', response.data);
        return response;
      })
      .catch(error => {
        throw error;
      });
  } catch (error) {
    console.error('인증번호 확인 실패', error);
    throw error;
  }
};

/* 임시 비밀번호 전송 */
export const PasswordIssue = async (
  phoneNumber: string,
  certificationNumber: Number,
) => {
  try {
    const response = await axiosInstance
      .post(
        '/api/v1/find-password',
        {
          phoneNumber: phoneNumber,
          certificationNumber: certificationNumber,
        },
        {},
      )
      .then(response => {
        console.log('임시 비밀번호 발급 성공', response.data);
        return response;
      });
  } catch (error) {
    throw error;
  }
};
