import * as styles from '@components/pages/order-list/order-list-layout/OrderListLayout.style';
import {ScrollView} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {useEffect, useState} from 'react';
import {OrderPastList} from '@/apis/order/orderlist/OrderList';

const bottomSpace = getBottomSpace();

interface OrderPast {
  day: number;
  dayOfTheWeek: string;
  orderedTime: string;
  totalPrice: number;
  totalCount: number;
  orderMenuList: {name: string; count: number}[];
}

const NumberWithComma = (data: number) => {
  return String(data).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

const OrderListLayout = () => {
  const [orderPastList, setOrderPastList] = useState<OrderPast[]>([]);

  useEffect(() => {
    const fetchOrderPastList = async () => {
      try {
        const response = await OrderPastList();
        setOrderPastList(response);
      } catch (error) {}
    };

    fetchOrderPastList();
  }, []);

  return (
    <styles.Box>
      <styles.TitleBox>
        <styles.Title>과거 주문 내역</styles.Title>
      </styles.TitleBox>
      <styles.Top />

      <styles.OrderListContainer>
        <ScrollView
          contentContainerStyle={{paddingBottom: bottomSpace}}
          showsVerticalScrollIndicator={false}>
          {orderPastList.map((pastList, index) => (
            <styles.OrderListBox key={index}>
              <styles.OrderContentBox>
                <styles.OrderDate>
                  <styles.OrderDateContentBold>
                    {pastList.day}
                  </styles.OrderDateContentBold>
                  <styles.OrderDateContent>
                    {pastList.dayOfTheWeek.substring(0, 3)}
                  </styles.OrderDateContent>
                </styles.OrderDate>
                <styles.Container>
                  <styles.OrderPrice>
                    -{NumberWithComma(pastList.totalPrice)} 원
                  </styles.OrderPrice>
                  <styles.OrderMenu>
                    <styles.OrderMenuContent>
                      {pastList.orderMenuList.map(
                        orderMenu =>
                          `${orderMenu.name}  ${orderMenu.count}개  `,
                      )}
                    </styles.OrderMenuContent>
                    <styles.Line />
                    <styles.OrderMenuCount>
                      총 {pastList.totalCount}개
                    </styles.OrderMenuCount>
                  </styles.OrderMenu>
                </styles.Container>
                <styles.OrderTime>
                  {pastList.orderedTime.substring(0, 5)}
                </styles.OrderTime>
              </styles.OrderContentBox>
            </styles.OrderListBox>
          ))}
        </ScrollView>
      </styles.OrderListContainer>
    </styles.Box>
  );
};

export default OrderListLayout;
