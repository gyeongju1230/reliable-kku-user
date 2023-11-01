import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dev.deunku.com',
  withCredentials: true,
});

/* 전화번호 중복확인 */
export const PhoneNumberDuplicate = async (phoneNumber: string) => {
  try {
    return axiosInstance
      .get(`/api/v1/register/phone-number/duplicate?phoneNumber=${phoneNumber}`)
      .then(response => {
        console.log('전화번호 중복 확인 성공', response.data);
        return response;
      })
      .catch(error => {
        throw error;
      });
  } catch (error) {
    console.error('전화번호 중복 확인 실패', error);
    throw error;
  }
};

/* 인증번호 전송 */
export const CertificationSend = async (phoneNumber: string) => {
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
        `/api/v1/register/phone-number/certification-number?phoneNumber=${phoneNumber}&certificationNumber=${certificationNumber}`,
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

/* 회원가입 */
export const IsSignup = async (
  realName: string,
  phoneNumber: string,
  password: string,
) => {
  try {
    const response = await axiosInstance
      .post(
        '/api/v1/register',
        {
          realName: realName,
          phoneNumber: phoneNumber,
          password: password,
        },
        {},
      )
      .then(response => {
        console.log('회원가입 성공', response.data);
        return response;
      });
  } catch (error) {
    throw error;
  }
};
