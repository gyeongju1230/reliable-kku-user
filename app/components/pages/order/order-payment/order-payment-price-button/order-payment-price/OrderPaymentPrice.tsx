import * as styles from '@components/pages/order/order-payment/order-payment-price-button/order-payment-price/OrderPaymentPrice.style';
import {Dispatch, SetStateAction, useEffect} from 'react';

const NumberWithComma = (data: string) => {
  return String(data).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

interface OrderPaymentProps {
  orderPrice: string;
  orderCount: string;
  setCountCheck: Dispatch<SetStateAction<boolean>>;
}
const OrderPaymentPrice = ({
  orderPrice,
  orderCount,
  setCountCheck,
}: OrderPaymentProps) => {
  const formattedPrice = NumberWithComma(orderPrice);

  useEffect(() => {
    if (parseInt(orderCount) >= 1 && parseInt(orderCount) <= 30) {
      setCountCheck(true);
    } else {
      setCountCheck(false);
    }
  }, [orderCount, setCountCheck]);

  return (
    <styles.Box>
      <styles.CountBox>
        <styles.CountContent>총 수량:</styles.CountContent>
        <styles.Count>{orderCount}개</styles.Count>
      </styles.CountBox>
      <styles.PriceBox>
        <styles.PriceContent>결제 예정금액 :</styles.PriceContent>
        <styles.Price>{formattedPrice}원</styles.Price>
      </styles.PriceBox>
    </styles.Box>
  );
};

export default OrderPaymentPrice;
