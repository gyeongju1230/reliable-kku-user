// FIXME. API interceptors 수정

import axios from 'axios';
import {Alert} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

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
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  Alert.alert('앗!', '로그인이 만료되었습니다.', [
    {
      text: '확인',
      onPress: () => {
        navigation.navigate('BottomTabs');
        console.log('로그인 페이지로 이동');
      },
    },
  ]);
};

// API.interceptors.request.use(config => {
//   axios.get('https://dev.deunku.com/api/v1/token/valid', {}).catch(() => {
//     axios
//       .get('https://dev.deunku.com/api/v1/token/update')
//       .then(res => {})
//       .catch(err => {
//         handleTokenExpirationError();
//       });
//   });
//
//   return config;
// });
