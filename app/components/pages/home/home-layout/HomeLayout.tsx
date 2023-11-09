import * as styles from '@components/pages/home/home-layout/HomeLayout.style';
import Title from '@assets/images/home/MainTitle.svg';
import HomeCatImage from '@components/pages/home/home-cat-image/HomeCatImage';
import {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {BASE_API} from '@/apis/common/CommonApi';

const Main = require('@assets/images/home/MainImage.png');

const HomeLayout = () => {
  useEffect(() => {
    const requestPermission = async () => {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
      }

      // Register the device with FCM
      await messaging().registerDeviceForRemoteMessages();

      // Get the token
      const token = await messaging().getToken();
      console.log('token >>>>>>>>', token);

      // Save the token
      BASE_API.post('/api/v1/fcm', {
        token: token,
      }).then(() => {
        console.log('success');
      });
      // await postToApi('/users/1234/tokens', {token});
    };
    requestPermission();
  }, []);

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
