import * as styles from '@components/pages/order-list/order-list-layout/OrderListLayout.style';
import {Container} from '@components/pages/order-list/order-list-layout/OrderListLayout.style';
import {ScrollView} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

const bottomSpace = getBottomSpace();
const OrderListLayout = () => {
  return (
    <styles.Box>
      <styles.TitleBox>
        <styles.Title>과거 주문 내역</styles.Title>
      </styles.TitleBox>
      <styles.Top />

      <styles.OrderListContainer>
        <ScrollView
          contentContainerStyle={{flex: 1, paddingBottom: bottomSpace}}>
          <styles.OrderListBox>
            <styles.OrderContentBox>
              <styles.OrderDate>
                <styles.OrderDateContentBold>30</styles.OrderDateContentBold>
                <styles.OrderDateContent>SAT</styles.OrderDateContent>
              </styles.OrderDate>
              <styles.Container>
                <styles.OrderPrice>-30,000 원</styles.OrderPrice>
                <styles.OrderMenu>
                  <styles.OrderMenuContent>
                    팥붕어빵 2개 슈크림붕어빵 3개 누텔라붕어빵 2개
                  </styles.OrderMenuContent>
                  <styles.Line />
                  <styles.OrderMenuCount>총 3개</styles.OrderMenuCount>
                </styles.OrderMenu>
              </styles.Container>
              <styles.OrderTime>09:27</styles.OrderTime>
            </styles.OrderContentBox>
          </styles.OrderListBox>

          <styles.OrderListBox>
            <styles.OrderContentBox>
              <styles.OrderDate>
                <styles.OrderDateContentBold>30</styles.OrderDateContentBold>
                <styles.OrderDateContent>SAT</styles.OrderDateContent>
              </styles.OrderDate>
              <styles.Container>
                <styles.OrderPrice>-30,000 원</styles.OrderPrice>
                <styles.OrderMenu>
                  <styles.OrderMenuContent>
                    팥붕어빵 2개 슈크림붕어빵 3개 누텔라붕어빵 2개
                  </styles.OrderMenuContent>
                  <styles.Line />
                  <styles.OrderMenuCount>총 3개</styles.OrderMenuCount>
                </styles.OrderMenu>
              </styles.Container>
              <styles.OrderTime>09:27</styles.OrderTime>
            </styles.OrderContentBox>
          </styles.OrderListBox>

          <styles.OrderListBox>
            <styles.OrderContentBox>
              <styles.OrderDate>
                <styles.OrderDateContentBold>30</styles.OrderDateContentBold>
                <styles.OrderDateContent>SAT</styles.OrderDateContent>
              </styles.OrderDate>
              <styles.Container>
                <styles.OrderPrice>-30,000 원</styles.OrderPrice>
                <styles.OrderMenu>
                  <styles.OrderMenuContent>
                    팥붕어빵 2개 슈크림붕어빵 3개 누텔라붕어빵 2개
                  </styles.OrderMenuContent>
                  <styles.Line />
                  <styles.OrderMenuCount>총 3개</styles.OrderMenuCount>
                </styles.OrderMenu>
              </styles.Container>
              <styles.OrderTime>09:27</styles.OrderTime>
            </styles.OrderContentBox>
          </styles.OrderListBox>
        </ScrollView>
      </styles.OrderListContainer>
    </styles.Box>
  );
};

export default OrderListLayout;
