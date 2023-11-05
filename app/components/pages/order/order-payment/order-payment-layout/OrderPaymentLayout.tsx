import * as styles from '@components/pages/order/order-payment/order-payment-layout/OrderPaymentLayout.style';
import BackButtonImage from '@assets/images/order/BackButton.svg';
import {TouchableOpacity} from 'react-native';
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
import {MypageMember} from '@/apis/Mypage/Mypage';

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
      } catch (error) {}
    };

    StoresOpenClosed()
      .then(response => {
        setIsopen(response.isOpened);
      })
      .catch(error => {
        console.error('Error', error);
      });

    fetchMenuList();
  }, []);

  return (
    <styles.Box>
      <styles.TitleContainer>
        <styles.TitleBox>
          <TouchableOpacity onPress={() => navigation.navigate('홈')}>
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
