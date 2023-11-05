import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Alert,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  AgreementWidget,
  AgreementWidgetControl,
  PaymentMethodWidget,
  PaymentMethodWidgetControl,
  PaymentWidgetProvider,
  usePaymentWidget,
} from '@tosspayments/widget-sdk-react-native';
import Config from 'react-native-config';
import uuid from 'react-native-uuid';
import BackButtonImage from '@assets/images/order/BackButton.svg';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {PaymentConfirm} from '@/apis/order/Order';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Webview = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const CLIENTKEY = Config.CLIENT_KEY ? Config.CLIENT_KEY : '';
  const newUUIDv4 = uuid.v4().toString();

  return (
    <>
      <View style={styles.TitleContainer}>
        <View style={styles.TitleBox}>
          <TouchableOpacity
            style={{zIndex: 100}}
            onPress={() => navigation.goBack()}>
            <View style={styles.BackButtonBox}>
              <BackButtonImage width={30} height={30} />
            </View>
          </TouchableOpacity>
          <View style={styles.Title}>
            <Text style={styles.TitleContent}>결제하기</Text>
          </View>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <PaymentWidgetProvider clientKey={CLIENTKEY} customerKey={newUUIDv4}>
          <CheckoutPage />
        </PaymentWidgetProvider>
      </ScrollView>
    </>
  );
};

function CheckoutPage() {
  const paymentWidgetControl = usePaymentWidget();
  const [paymentMethodWidgetControl, setPaymentMethodWidgetControl] =
    useState<PaymentMethodWidgetControl | null>(null);
  const [agreementWidgetControl, setAgreementWidgetControl] =
    useState<AgreementWidgetControl | null>(null);
  const orderId = uuid.v4();
  const [price, setPrice] = useState('');

  useEffect(() => {
    const fetchOrderPrice = async () => {
      const orderPrice = await AsyncStorage.getItem('orderPrice');
      const priceValue = orderPrice || '';
      setPrice(priceValue);
    };

    fetchOrderPrice();
  }, []);

  return (
    <View style={{flex: 1}}>
      <PaymentMethodWidget
        selector="payment-methods"
        onLoadEnd={() => {
          paymentWidgetControl
            .renderPaymentMethods(
              'payment-methods',
              {value: parseInt(price)},
              {
                variantKey: 'DEFAULT',
              },
            )
            .then(control => {
              setPaymentMethodWidgetControl(control);
            });
        }}
      />
      <AgreementWidget
        selector="agreement"
        onLoadEnd={() => {
          paymentWidgetControl
            .renderAgreement('agreement', {
              variantKey: 'DEFAULT',
            })
            .then(control => {
              setAgreementWidgetControl(control);
            });
        }}
      />
      <TouchableOpacity
        style={{height: 200}}
        onPress={async () => {
          if (paymentWidgetControl == null || agreementWidgetControl == null) {
            Alert.alert('주문 정보가 초기화되지 않았습니다.');
            return;
          }

          const agreeement = await agreementWidgetControl.getAgreementStatus();
          if (agreeement.agreedRequiredTerms !== true) {
            Alert.alert('약관에 동의하지 않았습니다.');
            return;
          }

          paymentWidgetControl
            .requestPayment?.({
              orderId: orderId.toString(),
              orderName: '든붕이',
            })
            .then(async res => {
              const paymentKey = res?.success?.paymentKey;
              try {
                if (paymentKey) {
                  await PaymentConfirm(
                    paymentKey,
                    orderId.toString(),
                    parseInt(price),
                  );
                }
              } catch (error) {
                console.error('결제승인 실패', error);
                Alert.alert('결제 중 오류가 발생했습니다.');
                console.log('paymentKey: ', paymentKey);
                console.log('orderId: ', orderId);
                console.log('price: ', price);
              }
            });
        }}>
        <View style={styles.ButtonContainer}>
          <View style={styles.ButtonBox}>
            <Text style={styles.ButtonContent}>결제하기</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Webview;

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  TitleContainer: {
    width: '100%',
    height: '13.02816901%',
    backgroundColor: '#fff',
  },
  TitleBox: {
    width: '100%',
    height: '30%',
    top: '6.5%',
    flexDirection: 'row',
  },
  BackButtonBox: {
    width: '30%',
    height: '30%',
    marginLeft: '26%',
  },
  Title: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TitleContent: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
  },
  ButtonContainer: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  ButtonBox: {
    position: 'absolute',
    width: '80%',
    height: '30%',
    top: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#FFCA42',
  },
  ButtonContent: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
  },
});
