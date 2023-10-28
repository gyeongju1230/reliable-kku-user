import * as styles from '@components/pages/order/order-payment/order-payment-price-button/order-payment-price/OrderPaymentPrice.style';
import {Text} from 'react-native';

const OrderPaymentPrice = () => {
  return (
    <styles.Box>
      <styles.CountBox>
        <styles.CountContent>총 수량:</styles.CountContent>
        <styles.Count>5개</styles.Count>
      </styles.CountBox>
      <styles.PriceBox>
        <styles.PriceContent>결제 예정금액 :</styles.PriceContent>
        <styles.Price>1,000원</styles.Price>
      </styles.PriceBox>
    </styles.Box>
  );
};

export default OrderPaymentPrice;
