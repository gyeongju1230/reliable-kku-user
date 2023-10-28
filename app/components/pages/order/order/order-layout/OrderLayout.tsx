import * as styles from '@components/pages/order/order/order-layout/OrderLayout.style';
import OrderWaitContent from '@components/pages/order/order/order-content/order-wait-content/OrderWaitContent';
import OrderReceiptContent from '@components/pages/order/order/order-content/order-receipt-content/OrderReceiptContent';
import OrderCompleteContent from '@components/pages/order/order/order-content/order-complete-content/OrderCompleteContent';
import OrderCompletePickupContent from '@components/pages/order/order/order-content/order-complete-content/order-complete-pickup-content/OrderCompletePickupContent';
import OrderList from '@components/pages/order/order/order-list/OrderList';

const OrderLayout = () => {
  return (
    <styles.Box>
      <styles.Top />
      <styles.Container>
        <styles.OrderBox>
          <styles.OrderBoxTop />
          {/*주문 상태에 따라 변경 필요*/}
          {/*<OrderWaitContent />*/}
          {/*<OrderReceiptContent />*/}
          {/*<OrderCompleteContent />*/}
          <OrderCompletePickupContent />
        </styles.OrderBox>
        <styles.CotentBox>
          <styles.Content>
            결제 완료 이후 표시되는 예상 시간과 일부 차이가 있을 수 있습니다.
          </styles.Content>
        </styles.CotentBox>
        <styles.OrderListBox>
          <styles.OrderListTop />
          <OrderList />
        </styles.OrderListBox>
      </styles.Container>
    </styles.Box>
  );
};

export default OrderLayout;
