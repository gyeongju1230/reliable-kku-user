import * as styles from '@components/pages/order/order/order-content/order-loading-content/OrderLoadingContent.style';
import {useEffect, useState} from 'react';
import LoadingImage from '@assets/images/order/Loading.svg';

const OrderLoadingContent = () => {
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
      <styles.ImageBox>
        <LoadingImage
          width={50}
          height={50}
          style={{transform: [{rotate: moveLeftRight}]}}
        />
      </styles.ImageBox>
    </styles.Box>
  );
};

export default OrderLoadingContent;
