import * as styles from '@components/pages/order/order-payment/order-payment-layout/OrderPaymentLayout.style';
import BackButtonImage from '@assets/images/order/BackButton.svg';
import {Alert, TouchableOpacity} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import OrderPaymentMenu from '@components/pages/order/order-payment/order-payment-menu/OrderPaymentMenu';
import OrderPaymentPriceButtonLayout from '@components/pages/order/order-payment/order-payment-price-button/order-payment-price-button-layout/OrderPaymentPriceButtonLayout';
import OrderPaymentCheckBox from '@components/pages/order/order-payment/order-payment-checkbox/OrderPaymentCheckBox';
import {useEffect, useState} from 'react';
import {OrderMenuList, StoresOpenClosed} from '@/apis/order/Order';

interface Menu {
  menuId: number;
  imageUrl: string;
  menuName: string;
  description: string;
  pricePerOne: number;
  pricePerThree: number;
  isSale: boolean;
}

const OrderPaymentLayout = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [check, setCheck] = useState(false);
  const [menuList, setMenuList] = useState<Menu[]>([]);
  const [isopen, setIsopen] = useState(false);
  const [orderPrice, setOrderPrice] = useState('');
  const [orderCount, setOrderCount] = useState('');

  useEffect(() => {
    const fetchMenuList = async () => {
      try {
        const response = await OrderMenuList();
        setMenuList(response);
      } catch (error) {
        Alert.alert('앗!', '로그인이 만료되었습니다.', [
          {
            text: '확인',
            onPress: () => {
              navigation.navigate('Signin');
              console.log('로그인 페이지로 이동');
            },
          },
        ]);
      }
    };

    StoresOpenClosed()
      .then(response => {
        setIsopen(response.isOpened);
      })
      .catch(error => {
        Alert.alert('앗!', '로그인이 만료되었습니다.', [
          {
            text: '확인',
            onPress: () => {
              navigation.navigate('Signin');
              console.log('로그인 페이지로 이동');
            },
          },
        ]);
        console.error('Error', error);
      });

    fetchMenuList();
  }, []);

  return (
    <styles.Box>
      <styles.TitleContainer>
        <styles.TitleBox>
          <TouchableOpacity
            onPress={() => navigation.navigate('홈')}
            hitSlop={{top: 20, bottom: 20}}>
            <styles.BackButtonBox>
              <BackButtonImage width={30} height={30} />
            </styles.BackButtonBox>
          </TouchableOpacity>
          <styles.Title>
            <styles.TitleContent>주문하기</styles.TitleContent>
          </styles.Title>
        </styles.TitleBox>
      </styles.TitleContainer>
      <styles.OrderPaymentMenuTop />
      <OrderPaymentMenu
        menuList={menuList}
        isopen={isopen}
        setOrderPrice={setOrderPrice}
        setOrderCount={setOrderCount}
      />
      <styles.OrderPaymentCheckBoxTop />
      <OrderPaymentCheckBox setCheck={setCheck} />
      <styles.PaymentPriceButtonLayoutTop />
      <OrderPaymentPriceButtonLayout
        check={check}
        orderPrice={orderPrice}
        orderCount={orderCount}
        isopen={isopen}
      />
    </styles.Box>
  );
};

export default OrderPaymentLayout;
