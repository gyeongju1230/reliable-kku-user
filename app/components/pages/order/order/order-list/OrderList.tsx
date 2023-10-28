import * as styles from '@components/pages/order/order/order-list/OrderList.style';
import {ScrollView} from 'react-native';

const OrderList = () => {
  return (
    <styles.Box>
      <styles.TitleBox>
        <styles.Title>든붕이님의 주문내역</styles.Title>
      </styles.TitleBox>
      <styles.OrderListBox>
        <ScrollView showsVerticalScrollIndicator={false}>
          <styles.OrderContentBox>
            <styles.OrderContent>팥 붕어빵</styles.OrderContent>
            <styles.OrderContentCount>2개</styles.OrderContentCount>
          </styles.OrderContentBox>
          <styles.OrderContentBox>
            <styles.OrderContent>슈크림 붕어빵</styles.OrderContent>
            <styles.OrderContentCount>30개</styles.OrderContentCount>
          </styles.OrderContentBox>
          <styles.OrderContentBox>
            <styles.OrderContent>누텔라 붕어빵</styles.OrderContent>
            <styles.OrderContentCount>2개</styles.OrderContentCount>
          </styles.OrderContentBox>
        </ScrollView>
      </styles.OrderListBox>
      <styles.Top />
      <styles.PriceBox>
        <styles.PriceContent>총 금액</styles.PriceContent>
        <styles.Price>3,400원</styles.Price>
      </styles.PriceBox>
    </styles.Box>
  );
};

export default OrderList;
