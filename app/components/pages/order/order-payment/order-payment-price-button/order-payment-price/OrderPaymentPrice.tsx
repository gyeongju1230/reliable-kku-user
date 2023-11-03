import * as styles from '@components/pages/order/order-payment/order-payment-price-button/order-payment-price/OrderPaymentPrice.style';

const NumberWithComma = (data: string) => {
  return String(data).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

interface OrderPaymentProps {
  orderPrice: string;
  orderCount: string;
}
const OrderPaymentPrice = ({orderPrice, orderCount}: OrderPaymentProps) => {
  const formattedPrice = NumberWithComma(orderPrice);

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
