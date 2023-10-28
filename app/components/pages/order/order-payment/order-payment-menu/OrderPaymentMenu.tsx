import * as styles from '@components/pages/order/order-payment/order-payment-menu/OrderPaymentMenu.style';
import {ScrollView, TouchableWithoutFeedback} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import MinusImage from '@assets/images/order/MinusButton.svg';
import PlusImage from '@assets/images/order/PlusButton.svg';

const bottomSpace = getBottomSpace();
const OrderPaymentMenu = () => {
  return (
    <styles.Box>
      <TouchableWithoutFeedback>
        <ScrollView style={{flexGrow: 0}} showsVerticalScrollIndicator={false}>
          <styles.MenuContainer>
            <styles.ImageBox />
            <styles.ContentContainer>
              <styles.ContentBox>
                <styles.Title>팥 붕어빵</styles.Title>
                <styles.Content>
                  머리부터 꼬리까지 꽉 찬 ‘.. 진짜 팥’
                </styles.Content>
              </styles.ContentBox>
              <styles.PriceContainer>
                <styles.PriceBox>
                  <styles.Price>700</styles.Price>
                  <styles.PriceContent>냥</styles.PriceContent>
                </styles.PriceBox>
                <styles.CountContainer>
                  <styles.CountBox>
                    <styles.CountMinusImageBox>
                      <MinusImage width={7} height={19} />
                    </styles.CountMinusImageBox>
                    <styles.Count>1</styles.Count>
                    <styles.CountPlusImageBox>
                      <PlusImage width={11} height={19} />
                    </styles.CountPlusImageBox>
                  </styles.CountBox>
                </styles.CountContainer>
              </styles.PriceContainer>
            </styles.ContentContainer>
          </styles.MenuContainer>
          <styles.MenuContainer>
            <styles.ImageBox />
            <styles.ContentContainer>
              <styles.ContentBox>
                <styles.Title>슈크림 붕어빵</styles.Title>
                <styles.Content>붕어가 되고싶은 델리만쥬의 일탈</styles.Content>
              </styles.ContentBox>
              <styles.PriceContainer>
                <styles.PriceBox>
                  <styles.Price>700</styles.Price>
                  <styles.PriceContent>냥</styles.PriceContent>
                </styles.PriceBox>
                <styles.CountContainer>
                  <styles.CountBox>
                    <styles.CountMinusImageBox>
                      <MinusImage width={7} height={19} />
                    </styles.CountMinusImageBox>
                    <styles.Count>1</styles.Count>
                    <styles.CountPlusImageBox>
                      <PlusImage width={11} height={19} />
                    </styles.CountPlusImageBox>
                  </styles.CountBox>
                </styles.CountContainer>
              </styles.PriceContainer>
            </styles.ContentContainer>
          </styles.MenuContainer>
          <styles.MenuContainer>
            <styles.ImageBox />
            <styles.ContentContainer>
              <styles.ContentBox>
                <styles.Title>누텔라 붕어빵</styles.Title>
                <styles.Content>
                  악마의 잼에 잡아먹혀 흑화된 붕어빵
                </styles.Content>
              </styles.ContentBox>
              <styles.PriceContainer>
                <styles.PriceBox>
                  <styles.Price>1,000</styles.Price>
                  <styles.PriceContent>냥</styles.PriceContent>
                </styles.PriceBox>
                <styles.CountContainer>
                  <styles.CountBox>
                    <styles.CountMinusImageBox>
                      <MinusImage width={7} height={19} />
                    </styles.CountMinusImageBox>
                    <styles.Count>1</styles.Count>
                    <styles.CountPlusImageBox>
                      <PlusImage width={11} height={19} />
                    </styles.CountPlusImageBox>
                  </styles.CountBox>
                </styles.CountContainer>
              </styles.PriceContainer>
            </styles.ContentContainer>
          </styles.MenuContainer>
        </ScrollView>
      </TouchableWithoutFeedback>
    </styles.Box>
  );
};

export default OrderPaymentMenu;
