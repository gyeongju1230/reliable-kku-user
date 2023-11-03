import * as styles from '@components/pages/order/order-payment/order-payment-price-button/order-payment-price-button-layout/OrderPaymentPriceButtonLayout.style';
import OrderPaymentPrice from '@components/pages/order/order-payment/order-payment-price-button/order-payment-price/OrderPaymentPrice';
import OrderPaymentButton from '@components/pages/order/order-payment/order-payment-price-button/order-payment-button/OrderPaymentButton';
import {View} from 'react-native';
import {OrderPaymentButtonTop} from '@components/pages/order/order-payment/order-payment-price-button/order-payment-price-button-layout/OrderPaymentPriceButtonLayout.style';

interface OrderPaymentPriceButtonLayoutProps {
  check: boolean;
  orderPrice: string;
  orderCount: string;
}
const OrderPaymentPriceButtonLayout = ({
  check,
  orderPrice,
  orderCount,
}: OrderPaymentPriceButtonLayoutProps) => {
  return (
    <styles.Box>
      <styles.OrderPaymentPriceTop />
      <OrderPaymentPrice orderPrice={orderPrice} orderCount={orderCount} />
      <styles.OrderPaymentButtonTop />
      <OrderPaymentButton check={check} />
    </styles.Box>
  );
};

export default OrderPaymentPriceButtonLayout;
