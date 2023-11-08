import * as styles from '@components/pages/home/home-cat-image/HomeCatImage.style';
import Cheese1 from '@assets/images/home/CheeseCat1.svg';
import Chocolate1 from '@assets/images/home/ChocolateCat1.svg';
import Redbean1 from '@assets/images/home/RedbeanCat1.svg';
import {useEffect, useState} from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import RefreshImage from '@assets/images/home/Refresh.svg';
import {LeftTime} from '@/apis/main/Main';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const HomeCatImage = () => {
  const [moveLeftRight, setMoveLeftRight] = useState('-15deg');
  const [time, setTime] = useState<number>(0);

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

  const handleRefresh = async () => {
    try {
      const response = await LeftTime();
      setTime(response.leftMinutes);
    } catch (error) {
      const navigation: NavigationProp<ParamListBase> = useNavigation();

      Alert.alert('앗!', '로그인이 만료되었습니다.', [
        {
          text: '확인',
          onPress: () => {
            navigation.navigate('Signin');
            console.log('로그인 페이지로 이동');
          },
        },
      ]);
    }
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleRefresh();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
      <styles.TimeBox>
        <TouchableOpacity
          onPress={handleRefresh}
          style={{
            position: 'absolute',
            marginTop: '9%',
            left: '11%',
            zIndex: 2000,
            transform: [{rotate: '360deg'}],
          }}>
          <RefreshImage width={16} height={16} />
        </TouchableOpacity>
        <styles.TimeBoxContent numberOfLines={2}>
          지금 붕어빵{'\n'}주문하면?
        </styles.TimeBoxContent>
        <styles.TimeBoxTime>{time}분</styles.TimeBoxTime>
      </styles.TimeBox>
    </styles.Box>
  );
};

export default HomeCatImage;
