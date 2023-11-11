import * as styles from '@components/pages/home/home-layout/HomeLayout.style';
import Title from '@assets/images/home/MainTitle.svg';
import HomeCatImage from '@components/pages/home/home-cat-image/HomeCatImage';
import {useEffect} from 'react';
import {BASE_API} from '@/apis/common/CommonApi';
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';

const Main = require('@assets/images/home/MainImage.png');

const HomeLayout = () => {
  useEffect(() => {
    // Notifications.registerRemoteNotifications();
    //
    // Notifications.ios.checkPermissions().then(currentPermissions => {
    //   console.log('Badges enabled: ' + !!currentPermissions.badge);
    //   console.log('Sounds enabled: ' + !!currentPermissions.sound);
    //   console.log('Alerts enabled: ' + !!currentPermissions.alert);
    //   console.log('Provisional enabled: ' + !!currentPermissions.provisional);
    //   console.log(
    //     'Provides App Notification Settings enabled: ' +
    //       !!currentPermissions.providesAppNotificationSettings,
    //   );
    //   console.log('Announcement enabled: ' + !!currentPermissions.announcement);
    // });
    //
    // Notifications.events().registerRemoteNotificationsRegistered(
    //   (event: Registered) => {
    //     // TODO: Send the token to my server so it could send back push notifications...
    //     console.log('Device Token Received', event.deviceToken);
    //     // 806d23175f233a6bc33acbec97d870d93cc5a066686ec06d7008d6da930b266923afd59182280a78a75ce3ace561e92669ed68a1acb9d7713db0d878bfc80571125f9a27d7cb324e9aeb67ff2b0047ff
    //     BASE_API.post('/api/v1/fcm', {
    //       token: event.deviceToken,
    //     }).then(() => {
    //       console.log('success');
    //     });
    //   },
    // );
    // Notifications.events().registerNotificationReceivedForeground(
    //   (
    //     notification: Notification,
    //     completion: (response: NotificationCompletion) => void,
    //   ) => {
    //     console.log('Notification Received - Foreground', notification.payload);
    //
    //     // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
    //     completion({alert: true, sound: true, badge: false});
    //   },
    // );
    //
    // Notifications.events().registerNotificationOpened(
    //   (
    //     notification: Notification,
    //     completion: () => void,
    //     action: NotificationActionResponse,
    //   ) => {
    //     console.log('Notification opened by device user', notification.payload);
    //     console.log(
    //       `Notification opened with an action identifier: ${action.identifier} and response text: ${action.text}`,
    //     );
    //     completion();
    //   },
    // );
    //
    // Notifications.events().registerNotificationReceivedBackground(
    //   (
    //     notification: Notification,
    //     completion: (response: NotificationCompletion) => void,
    //   ) => {
    //     console.log('Notification Received - Background', notification.payload);
    //
    //     // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
    //     completion({alert: true, sound: true, badge: false});
    //   },
    // );
  }, []);

  useEffect(() => {
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
