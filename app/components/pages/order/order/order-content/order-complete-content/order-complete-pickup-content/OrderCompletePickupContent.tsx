import * as styles from '@components/pages/order/order/order-content/order-complete-content/order-complete-pickup-content/OrderCompletePickupContent.style';
import {Modal, TouchableOpacity} from 'react-native';
import RefreshButton from '@assets/images/order/Refresh.svg';
import OrderIcon from '@assets/images/order/OrderIcon.svg';
import CompletePickupContentImage from '@assets/images/order/CompletePickupContentImage.svg';
import CompletePickupBar from '@assets/images/order/CompletePickupBar.svg';
import {useEffect, useState} from 'react';
import PickupModalIcon from '@assets/images/order/PickupModalIcon.svg';
import SuccessIcon from '@assets/icons/common/SuccessLogo.svg';
import Button from '@assets/images/order/Button.svg';
import {
  NavigationProp,
  ParamListBase,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OrderCompletePickupContent = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [moveLeftRight, setMoveLeftRight] = useState('-15deg');
  const [isPickupModal, setIsPickupModal] = useState(false);

  const isFocused = useIsFocused(); // isFoucesd Define

  useEffect(() => {
    return () => {};
  }, [isFocused]);

  const openPickupModal = () => {
    setIsPickupModal(true);
  };

  useEffect(() => {
    openPickupModal();
  }, []);

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

  const handleOnPressCloseButton = () => {
    AsyncStorage.removeItem('OrderId')
      .then(() => {
        console.log('OrderId 지우기 성공');
      })
      .catch(error => {
        console.error('Error:', error);
      });
    navigation.setOptions({unmountOnBlur: true});
    navigation.navigate('홈');
  };

  return (
    <styles.Box>
      <styles.ContentContainer>
        <styles.ContentBox>
          <styles.ContentTitle>픽업 완료</styles.ContentTitle>
          <styles.Content>
            따끈따끈한 붕어빵{'\n'}
            맛있게 드세요!
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

      <CompletePickupContentImage
        width="47.6351351%"
        height="65.3007145%"
        style={{
          top: '-15%',
          left: '27.3648649%',
        }}
      />
      <styles.BarContainer>
        <CompletePickupBar width="100%" height="30%" style={{top: '28%'}} />
        <OrderIcon
          width={50}
          height={50}
          style={{
            position: 'absolute',
            left: '90.1621622%',
            transform: [{rotate: moveLeftRight}],
          }}
        />
        <styles.BarContentBox>
          <styles.BarContent>접수</styles.BarContent>
          <styles.BarContent>조리완료</styles.BarContent>
          <styles.BarContent>픽업완료</styles.BarContent>
        </styles.BarContentBox>
      </styles.BarContainer>
      <Modal visible={isPickupModal} transparent={true} animationType="none">
        <styles.PickupModalContainer>
          <styles.PickupModalBox>
            <PickupModalIcon
              width={106}
              height={106}
              style={{marginTop: '10.0418410041841%'}}
            />

            <styles.PickupModalContent>
              픽업이 완료됐습니다!{'\n'}
              맛있게 드세요
            </styles.PickupModalContent>
            <SuccessIcon
              width={28}
              height={28}
              style={{top: '-9%', left: '20%'}}
            />
            <TouchableOpacity onPress={handleOnPressCloseButton}>
              <Button width={140} height={26} />
            </TouchableOpacity>
          </styles.PickupModalBox>
        </styles.PickupModalContainer>
      </Modal>
    </styles.Box>
  );
};

export default OrderCompletePickupContent;
