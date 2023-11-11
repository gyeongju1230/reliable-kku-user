import * as styles from '@components/pages/order/order/order-content/order-complete-content/OrderCompleteContent.style';
import {TouchableOpacity} from 'react-native';
import RefreshButton from '@assets/images/order/Refresh.svg';
import CompleteContentImage from '@assets/images/order/CompleteContentImage.svg';
import CompleteBar from '@assets/images/order/CompleteBar.svg';
import OrderIcon from '@assets/images/order/OrderIcon.svg';
import {useEffect, useState} from 'react';

const OrderCompleteContent = () => {
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
          <styles.ContentTitle>준비 완료</styles.ContentTitle>
          <styles.Content>
            붕어빵이 완성되었습니다!{'\n'}
            30분 내로 매장에서 붕어빵을 수령해주세요.
          </styles.Content>
        </styles.ContentBox>
        <styles.ButtonBox>
          <TouchableOpacity>
            <styles.Button>
              <styles.ButtonContent>픽업</styles.ButtonContent>
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

      <CompleteContentImage
        width="49.7972973%"
        height="73.7552643%"
        style={{
          top: '-9%',
          left: '30.9459459%',
          transform: [{rotate: '-17.471deg'}],
        }}
      />
      <styles.BarContainer>
        <CompleteBar width="100%" height="30%" />
        <OrderIcon
          width={50}
          height={50}
          style={{
            position: 'absolute',
            top: '-30%',
            left: '58.7297297%',
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

export default OrderCompleteContent;
