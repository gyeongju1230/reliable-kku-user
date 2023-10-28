import * as styles from '@components/pages/order/order/order-content/order-receipt-content/OrderReceiptContent.style';
import {TouchableOpacity} from 'react-native';
import ReceiptContentTmage from '@assets/images/order/ReciptContentImage.svg';
import RefreshButton from '@assets/images/order/Refresh.svg';
import ReceiptBar from '@assets/images/order/ReceiptBar.svg';
import OrderIcon from '@assets/images/order/OrderIcon.svg';
import {useEffect, useState} from 'react';

const OrderReceiptContent = () => {
  const [moveLeftRight, setMoveLeftRight] = useState('-15deg');

  const move = () => {
    moveLeftRight === '15deg'
      ? setMoveLeftRight('-15deg')
      : setMoveLeftRight('15deg');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      move();
    }, 1000);

    return () => clearTimeout(timer);
  }, [moveLeftRight]);

  return (
    <styles.Box>
      <styles.ContentContainer>
        <styles.ContentBox>
          <styles.ContentTitle>예상 완료 시간</styles.ContentTitle>
          <styles.Content>
            붕어들이 열심히 구워지고 있어요.{'\n'}
            우리 곧 만나요!
          </styles.Content>
        </styles.ContentBox>
        <styles.ButtonBox>
          <TouchableOpacity>
            <styles.Button>
              <styles.ButtonContent>35분</styles.ButtonContent>
            </styles.Button>
            <RefreshButton
              width={39}
              height={39}
              style={{
                position: 'absolute',
                top: '58.6956522%',
                left: '57%',
              }}
            />
          </TouchableOpacity>
        </styles.ButtonBox>
      </styles.ContentContainer>

      <ReceiptContentTmage
        width="45.6081081%"
        height="60%"
        style={{
          top: '-9.7777778%',
          left: '27.3648649%',
        }}
      />
      <styles.BarContainer>
        <ReceiptBar width="100%" height="30%" style={{top: '28%'}} />
        <OrderIcon
          width={50}
          height={50}
          style={{
            position: 'absolute',
            left: '7.06756757%',
            transform: [{rotate: moveLeftRight}],
          }}
        />
        <styles.BarContentBox>
          <styles.BarContent>접수</styles.BarContent>
          <styles.BarContent>조리완료</styles.BarContent>
          <styles.BarContent>픽업완료</styles.BarContent>
        </styles.BarContentBox>
      </styles.BarContainer>
    </styles.Box>
  );
};

export default OrderReceiptContent;
