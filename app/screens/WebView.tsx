import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import {
  AgreementWidget,
  AgreementWidgetControl,
  PaymentMethodWidget,
  PaymentMethodWidgetControl,
  PaymentWidgetProvider,
  usePaymentWidget,
} from '@tosspayments/widget-sdk-react-native';

const Webview = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const clientKey = process.env.CLIENT_KEY ? process.env.CLIENT_KEY : '';

  return (
    <SafeAreaView>
      <ScrollView>
        <PaymentWidgetProvider
          clientKey={'dfjfosjfojsdfljsfjsflkj'}
          customerKey={'asdasdasd'}>
          <CheckoutPage />
        </PaymentWidgetProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

function CheckoutPage() {
  const paymentWidgetControl = usePaymentWidget();
  const [paymentMethodWidgetControl, setPaymentMethodWidgetControl] =
    useState<PaymentMethodWidgetControl | null>(null);
  const [agreementWidgetControl, setAgreementWidgetControl] =
    useState<AgreementWidgetControl | null>(null);

  return (
    <>
      <PaymentMethodWidget
        selector="payment-methods"
        onLoadEnd={() => {
          paymentWidgetControl
            .renderPaymentMethods(
              'payment-methods',
              {value: 50_000},
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
      <Button
        title="결제요청"
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

          paymentWidgetControl.requestPayment?.({
            orderId: 'OrderId_123',
            orderName: '파란티셔츠 외 2건',
          });
        }}
      />
      <Button
        title="선택된 결제수단"
        onPress={async () => {
          if (paymentMethodWidgetControl == null) {
            Alert.alert('주문 정보가 초기화되지 않았습니다.');
            return;
          }

          Alert.alert(
            `선택된 결제수단: ${JSON.stringify(
              await paymentMethodWidgetControl.getSelectedPaymentMethod(),
            )}`,
          );
        }}
      />
      <Button
        title="결제 금액 변경"
        onPress={() => {
          if (paymentMethodWidgetControl == null) {
            Alert.alert('주문 정보가 초기화되지 않았습니다.');
            return;
          }

          paymentMethodWidgetControl.updateAmount(100_000).then(() => {
            Alert.alert('결제 금액이 100000원으로 변경되었습니다.');
          });
        }}
      />
    </>
  );
}

export default Webview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  webview: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
