import * as styles from '@components/pages/home/home-cat-image/HomeCatImage.style';
import Cheese1 from '@assets/images/home/CheeseCat1.svg';
import Chocolate1 from '@assets/images/home/ChocolateCat1.svg';
import Redbean1 from '@assets/images/home/RedbeanCat1.svg';
import {useEffect, useState} from 'react';

const HomeCatImage = () => {
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
      <Cheese1
        width="45.03816794%"
        height="20.77464789%"
        style={{
          position: 'absolute',
          top: '-0.58685446%',
          left: '7%',
          transform: [{rotate: moveLeftRight}],
        }}
      />
      <styles.Top />
      <Redbean1
        width="45.03816794%"
        height="20.77464789%"
        style={{
          position: 'absolute',
          top: '38.14553991%',
          left: '3%',
          transform: [{rotate: moveLeftRight}],
        }}
      />
      <Chocolate1
        width="45.03816794%"
        height="20.77464789%"
        style={{
          position: 'absolute',
          left: '48.09669211%',
          top: '52.16901408%',
          transform: [{rotate: moveLeftRight}],
        }}
      />
    </styles.Box>
  );
};

export default HomeCatImage;
