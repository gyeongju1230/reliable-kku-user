import * as styles from '@components/pages/home/home-layout/HomeLayout.style';
import Title from '@assets/images/home/MainTitle.svg';
import HomeCatImage from '@components/pages/home/home-cat-image/HomeCatImage';
import {useEffect} from 'react';
import {BASE_API} from '@/apis/common/CommonApi';
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';
import {OrderDuplicate} from '@/apis/main/Main';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Main = require('@assets/images/home/MainImage.png');

const HomeLayout = () => {
  useEffect(() => {
    OrderDuplicate().then(res => {
      AsyncStorage.setItem('orderId', String(res));
    });
    requestUserPermission();
  }, []);

  const requestUserPermission = async () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );

    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      return getToken();
    }
  };

  const getToken = async () => {
    const fcmToken = await messaging().getToken();
    console.log('디바이스 토큰값');
    console.log(fcmToken);

    BASE_API.post('/api/v1/fcm', {
      token: fcmToken,
    }).then(() => {
      console.log('success');
    });
  };

  return (
    <styles.Box>
      <styles.MainImage source={Main} resizeMode="stretch">
        <styles.Top />
        <Title
          width={'23.34987277%'}
          height={'3.52112676%'}
          style={{flex: 1, alignSelf: 'center'}}
        />
        <HomeCatImage />
      </styles.MainImage>
    </styles.Box>
  );
};

export default HomeLayout;
