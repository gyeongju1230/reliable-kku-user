import * as styles from '@components/pages/order/order-payment/order-payment-price-button/order-payment-button/OrderPaymentButton.style';
import {Text, TouchableOpacity} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

interface OrderPaymentButton {
  check: boolean;
  countCheck: boolean;
  isopen: boolean;
}

const OrderPaymentButton = ({
  check,
  countCheck,
  isopen,
}: OrderPaymentButton) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const isDisabled = !check || !countCheck || !isopen;

  const handlePress = () => {
    if (check) {
      navigation.navigate('Webview');
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} disabled={isDisabled}>
      <styles.Box>
        <styles.Content>주문하기</styles.Content>
      </styles.Box>
    </TouchableOpacity>
  );
};

export default OrderPaymentButton;
