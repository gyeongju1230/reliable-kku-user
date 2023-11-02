import * as styles from '@components/pages/order/order-payment/order-payment-price-button/order-payment-button/OrderPaymentButton.style';
import {Text, TouchableOpacity} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const OrderPaymentButton = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Webview')}>
      <styles.Box>
        <styles.Content>주문하기</styles.Content>
      </styles.Box>
    </TouchableOpacity>
  );
};

export default OrderPaymentButton;
