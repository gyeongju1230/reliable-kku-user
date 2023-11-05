import * as styles from '@components/pages/order/order-payment/order-payment-price-button/order-payment-price-button-layout/OrderPaymentPriceButtonLayout.style';
import OrderPaymentPrice from '@components/pages/order/order-payment/order-payment-price-button/order-payment-price/OrderPaymentPrice';
import OrderPaymentButton from '@components/pages/order/order-payment/order-payment-price-button/order-payment-button/OrderPaymentButton';
import {useState} from 'react';

interface OrderPaymentPriceButtonLayoutProps {
  check: boolean;
  orderPrice: string;
  orderCount: string;
  isopen: boolean;
}
const OrderPaymentPriceButtonLayout = ({
  check,
  orderPrice,
  orderCount,
  isopen,
}: OrderPaymentPriceButtonLayoutProps) => {
  const [countCheck, setCountCheck] = useState(false);

  return (
    <styles.Box>
      <styles.OrderPaymentPriceTop />
      <OrderPaymentPrice
        orderPrice={orderPrice}
        orderCount={orderCount}
        setCountCheck={setCountCheck}
      />
      <styles.OrderPaymentButtonTop />
      <OrderPaymentButton
        check={check}
        countCheck={countCheck}
        isopen={isopen}
      />
    </styles.Box>
  );
};

export default OrderPaymentPriceButtonLayout;
