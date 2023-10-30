import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Signin from '@screens/Signin';
import SignupTerms from '@screens/SignupTerms';
import Terms from '@screens/terms/Terms';
import TermsAlarm from '@screens/terms/TermsAlarm';
import Signup from '@screens/Sginup';
import FindPassword from '@screens/FindPassword';
import Home from '@screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Order from '@screens/Order';
import OrderList from '@screens/OrderList';
import Mypage from '@screens/Mypage';
import OrderPayment from '@screens/Order-Payment';
import TermsMypage from '@screens/terms/TermsMypage';
import ChangePassword from '@screens/ChangePassword';

import HomeImage from '@assets/icons/bottom-navigation/Home.svg';
import OrderUnClickImage from '@assets/icons/bottom-navigation/OrderUnClick.svg';
import OrderClickImage from '@assets/icons/bottom-navigation/OrderClick.svg';
import OrderUnClickListImage from '@assets/icons/bottom-navigation/OrderListUnClick.svg';
import OrderListClickImage from '@assets/icons/bottom-navigation/OrderListClick.svg';
import MypageUnClickImage from '@assets/icons/bottom-navigation/MypageUnClick.svg';
import MypageClickImage from '@assets/icons/bottom-navigation/MypageClick.svg';

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
      <Tab.Screen name="홈" component={Home} />
      <Tab.Screen name="주문" component={Order} />
      <Tab.Screen name="주문내역" component={OrderList} />
      <Tab.Screen name="My붕" component={Mypage} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
export default App;
