import * as styles from '@components/pages/order/order-payment/order-payment-menu/OrderPaymentMenu.style';
import {
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import MinusImage from '@assets/images/order/MinusButton.svg';
import PlusImage from '@assets/images/order/PlusButton.svg';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Soldout from '@assets/images/order/SoldOut.svg';

interface Menu {
  menuId: number;
  imageUrl: string;
  menuName: string;
  description: string;
  pricePerOne: number;
  pricePerThree: number;
  isSale: boolean;
}

interface OrderPaymentMenuProps {
  menuList: Menu[];
  isopen: boolean;
  setOrderPrice: Dispatch<SetStateAction<string>>;
  setOrderCount: Dispatch<SetStateAction<string>>;
}

const OrderPaymentMenu = ({
  menuList,
  isopen,
  setOrderPrice,
  setOrderCount,
}: OrderPaymentMenuProps) => {
  const [quantity, setQuantity] = useState<{[key: number]: number}>({});
  const [isMaxCount, setIsMaxCount] = useState(false);

  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.removeItem('registeredMenus');
      console.log('AsyncStorage 의 registeredMenus 값을 지움');
    } catch (error) {}
  };
  useEffect(() => {
    clearAsyncStorage();
  }, []);

  // 총 금액/총 수량
  useEffect(() => {
    let total = 0;
    let count = 0;

    quantity[1] = quantity[1] ? quantity[1] : 0;
    quantity[2] = quantity[2] ? quantity[2] : 0;

    count += quantity[1] + quantity[2];

    let menuId1And2Price = 0;
    menuId1And2Price =
      Math.floor((quantity[1] + quantity[2]) / 3) * 2000 +
      ((quantity[1] + quantity[2]) % 3) * 700;

    menuList.forEach(menu => {
      if ([1, 2].includes(menu.menuId)) {
        return;
      }

      const orderedQuantity = quantity[menu.menuId] || 0;
      const pricePerOne = menu.pricePerOne;
      const pricePerThree = menu.pricePerThree;
      let price = 0;

      price =
        Math.floor(orderedQuantity / 3) * pricePerThree +
        (orderedQuantity % 3) * pricePerOne;

      total += price;
      count += orderedQuantity;
      setIsMaxCount(count > 29);
    });

    const filteredQuantity = Object.entries(quantity)
      .filter(([, value]) => value > 0)
      .reduce<{menuId: number; count: number}[]>((acc, [key, value]) => {
        acc.push({menuId: parseInt(key), count: value} as {
          menuId: number;
          count: number;
        });
        return acc;
      }, []);

    AsyncStorage.setItem('registeredMenus', JSON.stringify(filteredQuantity))
      .then(() =>
        console.log('메뉴 별 menuId 와 count 저장: ', filteredQuantity),
      )
      .catch(error =>
        console.error('메뉴 별 menuId 와 count 저장 실패:', error),
      );

    total += menuId1And2Price;
    setOrderPrice(total.toString());
    setOrderCount(count.toString());
  }, [quantity, menuList, setOrderPrice, setOrderCount]);

  // 붕어 카운트
  const increaseQuantity = (menuId: number) => {
    setQuantity(prev => ({
      ...prev,
      [menuId]: (prev[menuId] || 0) + 1,
    }));
  };

  const decreaseQuantity = (menuId: number) => {
    if (quantity[menuId] > 0) {
      setQuantity(prev => ({
        ...prev,
        [menuId]: (prev[menuId] || 1) - 1,
      }));
    }
  };

  return (
    <styles.Box>
      <TouchableWithoutFeedback>
        <ScrollView style={{flexGrow: 0}} showsVerticalScrollIndicator={false}>
          {menuList.map(menu => (
            <styles.MenuContainer key={menu.menuId}>
              <styles.ImageBox>
                <Image source={{uri: menu.imageUrl}} width={122} height={120} />
                {!menu.isSale && isopen && (
                  <Soldout
                    width={60}
                    height={68}
                    style={{position: 'absolute'}}
                  />
                )}
                {!isopen && (
                  <Soldout
                    width={60}
                    height={68}
                    style={{position: 'absolute'}}
                  />
                )}
              </styles.ImageBox>
              <styles.ContentContainer>
                <styles.ContentBox>
                  <styles.Title>{menu.menuName}</styles.Title>
                  <styles.Content>{menu.description}</styles.Content>
                </styles.ContentBox>
                <styles.PriceContainer>
                  <styles.PriceBox>
                    <styles.Price>{menu.pricePerOne}</styles.Price>
                    <styles.PriceContent>냥</styles.PriceContent>
                  </styles.PriceBox>
                  <styles.CountContainer>
                    <styles.CountBox>
                      <TouchableOpacity
                        hitSlop={{top: 20, bottom: 20}}
                        onPress={() => decreaseQuantity(menu.menuId)}
                        disabled={!menu.isSale || !isopen}>
                        <styles.CountMinusImageBox>
                          <MinusImage width={12} height={24} />
                        </styles.CountMinusImageBox>
                      </TouchableOpacity>
                      <styles.Count>{quantity[menu.menuId] || 0}</styles.Count>
                      <TouchableOpacity
                        hitSlop={{top: 20, bottom: 20}}
                        onPress={() => increaseQuantity(menu.menuId)}
                        disabled={
                          isMaxCount ||
                          !menu.isSale ||
                          !isopen ||
                          quantity[menu.menuId] === 30
                        }>
                        <styles.CountPlusImageBox>
                          <PlusImage width={12} height={24} />
                        </styles.CountPlusImageBox>
                      </TouchableOpacity>
                    </styles.CountBox>
                  </styles.CountContainer>
                </styles.PriceContainer>
              </styles.ContentContainer>
            </styles.MenuContainer>
          ))}
        </ScrollView>
      </TouchableWithoutFeedback>
    </styles.Box>
  );
};

export default OrderPaymentMenu;
