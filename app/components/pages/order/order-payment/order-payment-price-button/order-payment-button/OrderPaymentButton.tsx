import * as styles from '@components/pages/order/order-payment/order-payment-price-button/order-payment-button/OrderPaymentButton.style';
import {TouchableOpacity} from 'react-native';
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
      <styles.Box
        style={{
          backgroundColor: isDisabled ? '#E0E0E0' : '#FFCA42',
        }}>
        <styles.Content>주문하기</styles.Content>
      </styles.Box>
    </TouchableOpacity>
  );
};

export default OrderPaymentButton;
