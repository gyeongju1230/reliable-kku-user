import * as styles from '@components/pages/order/order/order-list/OrderList.style';
import {ScrollView} from 'react-native';

interface OrderDetailList {
  totalPrice: number;
  username: string;
  orderMenuList: {name: string; count: number}[];
}

const OrderList = ({totalPrice, username, orderMenuList}: OrderDetailList) => {
  return (
    <styles.Box>
      <styles.TitleBox>
        <styles.Title>{username}님의 주문내역</styles.Title>
      </styles.TitleBox>
      <styles.OrderListBox>
        <ScrollView showsVerticalScrollIndicator={false}>
          {orderMenuList.map((orderMenu, index) => (
            <styles.OrderContentBox key={index}>
              <styles.OrderContent>{orderMenu.name}</styles.OrderContent>
              <styles.OrderContentCount>
                {orderMenu.count}개
              </styles.OrderContentCount>
            </styles.OrderContentBox>
          ))}
        </ScrollView>
      </styles.OrderListBox>
      <styles.Top />
      <styles.PriceBox>
        <styles.PriceContent>총 금액</styles.PriceContent>
        <styles.Price>{totalPrice}원</styles.Price>
      </styles.PriceBox>
    </styles.Box>
  );
};

export default OrderList;
