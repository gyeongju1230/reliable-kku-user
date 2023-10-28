import * as styles from '@components/pages/order/order/order-content/order-wait-content/OrderWaitContent.style';
import {TouchableOpacity} from 'react-native';
import WaitContentImage from '@assets/images/order/WaitContentImage.svg';
import {useEffect, useState} from 'react';

const OrderWaitContent = () => {
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
          <styles.ContentTitle>주문 대기중</styles.ContentTitle>
          <styles.ContentBold>
            매장에서 주문을 확인 중입니다...
          </styles.ContentBold>
          <styles.Content>
            주문이 확인되기 전까지는 취소가 가능합니다.
          </styles.Content>
        </styles.ContentBox>
        <TouchableOpacity>
          <styles.Button>
            <styles.ButtonContent>취소</styles.ButtonContent>
          </styles.Button>
        </TouchableOpacity>
      </styles.ContentContainer>

      <WaitContentImage
        width="56.321839%"
        height="56.321839%"
        style={{
          top: '5.3333333%',
          left: '50.2837838%',
          transform: [{rotate: moveLeftRight}],
        }}
      />
    </styles.Box>
  );
};

export default OrderWaitContent;
