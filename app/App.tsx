import React, {useEffect, useState} from 'react';
import CodePush, {DownloadProgress, LocalPackage} from 'react-native-code-push';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  useIsFocused,
  useRoute,
} from '@react-navigation/native';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Signin from '@screens/Signin';
import SignupTerms from '@screens/SignupTerms';
import Terms from '@screens/terms/Terms';
import TermsAlarm from '@screens/terms/TermsAlarm';
import Signup from '@screens/Signup';
import FindPassword from '@screens/FindPassword';
import Home from '@screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Order from '@screens/Order';
import OrderList from '@screens/OrderList';
import Mypage from '@screens/Mypage';
import OrderPayment from '@screens/Order-Payment';
import TermsMypage from '@screens/terms/TermsMypage';
import ChangePassword from '@screens/ChangePassword';
import Webview from '@screens/WebView';

import HomeImage from '@assets/icons/bottom-navigation/Home.svg';
import OrderUnClickImage from '@assets/icons/bottom-navigation/OrderUnClick.svg';
import OrderClickImage from '@assets/icons/bottom-navigation/OrderClick.svg';
import OrderUnClickListImage from '@assets/icons/bottom-navigation/OrderListUnClick.svg';
import OrderListClickImage from '@assets/icons/bottom-navigation/OrderListClick.svg';
import MypageUnClickImage from '@assets/icons/bottom-navigation/MypageUnClick.svg';
import MypageClickImage from '@assets/icons/bottom-navigation/MypageClick.svg';
import {RecoilRoot} from 'recoil';
import {OrderDuplicate} from '@/apis/main/Main';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import Logo from '@assets/images/signin/SigninLogo.svg';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function getTabBarIcon(routeName: string, focused: boolean) {
  switch (routeName) {
    case '홈':
      return focused ? (
        <HomeImage width={34} height={34} />
      ) : (
        <HomeImage width={34} height={34} />
      );
    case '주문':
      return focused ? (
        <OrderClickImage width={24} height={24} />
      ) : (
        <OrderUnClickImage width={24} height={24} />
      );
    case '주문현황':
      return focused ? (
        <OrderClickImage width={24} height={24} />
      ) : (
        <OrderUnClickImage width={24} height={24} />
      );
    case '주문내역':
      return focused ? (
        <OrderListClickImage width={22} height={22} />
      ) : (
        <OrderUnClickListImage width={22} height={22} />
      );
    case 'My붕':
      return focused ? (
        <MypageClickImage width={24} height={24} />
      ) : (
        <MypageUnClickImage width={24} height={24} />
      );
    default:
      return null;
  }
}

function BottomTabs() {
  const route = useRoute();
  const [hasActiveOrder, setHasActiveOrder] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    OrderDuplicate()
      .then(() => {
        setHasActiveOrder(true);
      })
      .catch(async _ => {
        setHasActiveOrder(false);

        try {
          await AsyncStorage.removeItem('orderId');
          console.log('remove orderId 성공: ');
        } catch (removeError) {
          console.error('Error:', removeError);
          console.log('remove orderId 실패: ');
        }
      });
  }, []);

  useEffect(() => {
    OrderDuplicate()
      .then(() => {
        setHasActiveOrder(true);
      })
      .catch(_ => {
        setHasActiveOrder(false);
      });
  }, [isFocused, route]);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#E0B225',
        tabBarIcon: ({focused}) => getTabBarIcon(route.name, focused),
        tabBarStyle: {
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        },
      })}>
      <Tab.Screen name="홈" component={Home} options={{unmountOnBlur: true}} />
      {!hasActiveOrder && (
        <Tab.Screen
          name="주문"
          component={OrderPayment}
          options={{tabBarStyle: {display: 'none'}, unmountOnBlur: true}}
        />
      )}
      {hasActiveOrder && (
        <Tab.Screen
          name="주문현황"
          component={Order}
          options={{unmountOnBlur: true}}
        />
      )}
      <Tab.Screen
        name="주문내역"
        component={OrderList}
        options={{unmountOnBlur: true}}
      />
      <Tab.Screen
        name="My붕"
        component={Mypage}
        options={{unmountOnBlur: true}}
      />
    </Tab.Navigator>
  );
}

function App() {
  const [hasUpdate, setHasUpdate] = useState(false);
  const [syncProgress, setSyncProgress] = useState<DownloadProgress>();

  useEffect(() => {
    return messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage);
    });
  }, []);

  useEffect(() => {
    const checkCodePush = async () => {
      CodePush.checkForUpdate()
        .then(update => {
          console.log('update: ', update);
          if (update) {
            setHasUpdate(true);
            update
              .download((progress: DownloadProgress) =>
                setSyncProgress(progress),
              )
              .then((newPackage: LocalPackage) =>
                newPackage
                  .install(CodePush.InstallMode.IMMEDIATE)
                  .then(() => CodePush.restartApp()),
              );
            return;
          }

          setHasUpdate(false);
          return;
        })
        .catch(error => {
          console.log('error', error);
          setHasUpdate(false);
        });
    };

    checkCodePush();
  }, []);

  if (hasUpdate) {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            top: '30%',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Logo width={177} height={171} />
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            안정적인 서비스 사용을 위해 내부 업데이트를 진행합니다.
          </Text>
          <Text style={{alignItems: 'center', justifyContent: 'center'}}>
            {syncProgress?.receivedBytes ? syncProgress?.receivedBytes : 0}/
            {syncProgress?.totalBytes ? syncProgress?.totalBytes : 0}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <RecoilRoot>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
            }}>
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="SignupTerms" component={SignupTerms} />
            <Stack.Screen name="Terms" component={Terms} />
            <Stack.Screen name="TermsAlarm" component={TermsAlarm} />
            <Stack.Screen name="TermsMypage" component={TermsMypage} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="FindPassword" component={FindPassword} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
            <Stack.Screen name="OrderPayment" component={OrderPayment} />
            <Stack.Screen name="Order" component={Order} />
            <Stack.Screen name="Webview" component={Webview} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
  },
});
//
// const codePushOptions = {
//   checkFrequency: CodePush.CheckFrequency.ON_APP_START,
//   updateDialog: {
//     title: '새로운 업데이트가 있습니다.',
//     optionalUpdateMessage: '지금 업데이트 하시겠습니까?',
//     optionalInstallButtonLabel: '업데이트',
//     optionalIgnoreButtonLabel: '아니요.',
//   },
//   installMode: CodePush.InstallMode.IMMEDIATE,
// };

export default CodePush(App);
