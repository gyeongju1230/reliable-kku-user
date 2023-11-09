// FIXME. API interceptors 수정

import axios from 'axios';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BASE_API = axios.create({
  baseURL: 'https://dev.deunku.com',
  responseType: 'json',
  withCredentials: true,
});

export const API = axios.create({
  baseURL: 'https://dev.deunku.com',
  responseType: 'json',
  withCredentials: true,
});

export const handleTokenExpirationError = () => {
  // const navigation: NavigationProp<ParamListBase> = useNavigation();

  Alert.alert('앗!', '로그인이 만료되었습니다.', [
    {
      text: '확인',
      onPress: () => {
        // navigation.navigate('Signin');
        console.log('로그인 페이지로 이동');
      },
    },
  ]);
};

BASE_API.interceptors.request.use(async config => {
  const accessToken = await AsyncStorage.getItem('accessToken');

  if (accessToken) {
    config.headers.Authorization = accessToken;
  }

  return config;
});

BASE_API.interceptors.response.use(
  res => res,
  async err => {
    const {
      config,
      response: {status},
    } = err;
    const originalRequest = config;

    if (status !== 403) {
      return Promise.reject(err);
    }

    const {
      headers: {authorization},
    } = await axios.get('https://dev.deunku.com/api/v1/token/update', {
      withCredentials: true,
    });
    await AsyncStorage.setItem('accessToken', authorization);

    if (typeof authorization === 'string') {
      config.headers.Authorization = authorization;
      return axios(config);
    }
    return Promise.reject(err);
  },
);

//     .use(
//   res => res,
//   async err => {
//     const {
//       config,
//       response: {status},
//     } = err;
//
//     // if (config.url === REFRESH_URL || status !== 401 || config.sent) {
//     //   return Promise.reject(err);
//     // }
//
//     /** 2 */
//     if (status === 403) {
//       await axios
//         .get('https://dev.deunku.com/api/v1/token/update', {
//           withCredentials: true,
//         })
//         .then(res => {
//           // config.headers.Cookie = res.headers['set-cookie'];
//           config.headers.Cookie = res.data;
//           console.log('config.headers.Cookie', config.headers.Cookie);
//           return axios(config);
//         })
//         .catch(err => {
//           console.log(
//             '실패실패실패실패실패실패실패실패실패실패실패실패실패실패실패실패실패실패실패실패실패',
//           );
//           handleTokenExpirationError();
//         });
//
//       return axios(err.config);
//       // return Promise.reject(err);
//       // axios
//       //   .get('https://dev.deunku.com/api/v1/token/valid', {})
//       //   .then(() => {
//       //     config.sent = true;
//       //   })
//       //   .catch(() => {
//       //     axios
//       //       .get('https://dev.deunku.com/api/v1/token/update')
//       //       .then(() => {
//       //         config.sent = true;
//       //       })
//       //       .catch(err => {
//       //         console.log(
//       //           '실패실패실패실패실패실패실패실패실패실패실패실패실패실패실패실패실패실패실패실패실패',
//       //         );
//       //         handleTokenExpirationError();
//       //         return Promise.reject(err);
//       //       });
//       //   });
//     } else {
//       return Promise.reject(err);
//     }
//
//     return axios(config);
//   },
// );
