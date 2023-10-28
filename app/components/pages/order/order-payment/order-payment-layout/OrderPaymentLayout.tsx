import * as styles from '@components/pages/order/order-payment/order-payment-layout/OrderPaymentLayout.style';
import BackButtonImage from '@assets/images/order/BackButton.svg';
import {TouchableOpacity, View} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import MarginTop from '@components/common/MarginTop';
import OrderPaymentMenu from '@components/pages/order/order-payment/order-payment-menu/OrderPaymentMenu';
import OrderPaymentPriceButtonLayout from '@components/pages/order/order-payment/order-payment-price-button/order-payment-price-button-layout/OrderPaymentPriceButtonLayout';
import {
  OrderPaymentCheckBoxTop,
  OrderPaymentMenuTop,
  PaymentPriceButtonLayoutTop,
} from '@components/pages/order/order-payment/order-payment-layout/OrderPaymentLayout.style';
import OrderPaymentCheckBox from '@components/pages/order/order-payment/order-payment-checkbox/OrderPaymentCheckBox';
const OrderPaymentLayout = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

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
      <OrderPaymentMenu />
      <styles.OrderPaymentCheckBoxTop />
      <OrderPaymentCheckBox />
      <styles.PaymentPriceButtonLayoutTop />
      <OrderPaymentPriceButtonLayout />
    </styles.Box>
  );
};

export default OrderPaymentLayout;
