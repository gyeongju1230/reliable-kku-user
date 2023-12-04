// FIXME. API interceptors 수정

import axios from 'axios';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BASE_API = axios.create({
  baseURL: 'https://prod.deunku.com',
  responseType: 'json',
  withCredentials: true,
});

export const API = axios.create({
  baseURL: 'https://prod.deunku.com',
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

  if (accessToken != null && accessToken !== '' && accessToken !== undefined) {
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

    console.log('error ', err);

    if (status !== 401) {
      return Promise.reject(err);
    }

    await axios
      .get('https://prod.deunku.com/api/v1/token/update', {
        withCredentials: true,
      })
      .then(res => {
        AsyncStorage.setItem('accessToken', res.headers.authorization);

        console.log('res.headers.Authorization', res.headers.authorization);

        if (typeof res.headers.Authorization === 'string') {
          config.headers.Authorization = res.headers.Authorization;
          return axios(config);
        }
      })
      .catch(() => {
        return Promise.reject(err);
      });

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
//         .get('https://prod.deunku.com/api/v1/token/update', {
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
//       //   .get('https://prod.deunku.com/api/v1/token/valid', {})
//       //   .then(() => {
//       //     config.sent = true;
//       //   })
//       //   .catch(() => {
//       //     axios
//       //       .get('https://prod.deunku.com/api/v1/token/update')
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
