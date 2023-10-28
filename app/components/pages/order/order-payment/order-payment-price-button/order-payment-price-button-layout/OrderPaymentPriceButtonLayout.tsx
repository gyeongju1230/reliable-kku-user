import * as styles from '@components/pages/order/order-payment/order-payment-price-button/order-payment-price-button-layout/OrderPaymentPriceButtonLayout.style';
import OrderPaymentPrice from '@components/pages/order/order-payment/order-payment-price-button/order-payment-price/OrderPaymentPrice';
import OrderPaymentButton from '@components/pages/order/order-payment/order-payment-price-button/order-payment-button/OrderPaymentButton';
import {View} from 'react-native';
import {OrderPaymentButtonTop} from '@components/pages/order/order-payment/order-payment-price-button/order-payment-price-button-layout/OrderPaymentPriceButtonLayout.style';

const OrderPaymentPriceButtonLayout = () => {
  return (
    <styles.Box>
      <styles.OrderPaymentPriceTop />
      <OrderPaymentPrice />
      <styles.OrderPaymentButtonTop />
      <OrderPaymentButton />
    </styles.Box>
  );
};

export default OrderPaymentPriceButtonLayout;
