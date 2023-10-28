import * as styles from '@components/pages/order/order-payment/order-payment-checkbox/OrderPaymentCheckBox.style';
import CheckBoxImage from '@assets/images/order/CheckBox.svg';
import {TouchableOpacity} from 'react-native';

const OrderPaymentCheckBox = () => {
  return (
    <styles.Box>
      <styles.CheckContainer>
        <styles.CheckContent>
          *완료 10분 전 알림 전송 시간 기준 30분 이내{'\n'}
          매장을 방문하지 않을 경우{' '}
          <styles.CheckContentLine>
            음식을 수령할 수 없습니다.
          </styles.CheckContentLine>
        </styles.CheckContent>
        <TouchableOpacity>
          <styles.CheckBox>
            <CheckBoxImage width={20} height={20} />
          </styles.CheckBox>
        </TouchableOpacity>
      </styles.CheckContainer>
      <styles.ContentBoxTop />
      <styles.ContentBox>
        <styles.Content>
          30개 이상 주문 시 인스타그램 DM(@KU_meal_kit)으로 문의 바랍니다.
        </styles.Content>
      </styles.ContentBox>
    </styles.Box>
  );
};

export default OrderPaymentCheckBox;
