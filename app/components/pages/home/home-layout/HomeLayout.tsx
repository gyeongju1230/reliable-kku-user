import * as styles from '@components/pages/home/home-layout/HomeLayout.style';
import Title from '@assets/images/home/MainTitle.svg';
import HomeCatImage from '@components/pages/home/home-cat-image/HomeCatImage';
import RefreshImage from '@assets/images/home/Refresh.svg';
import {TouchableOpacity} from 'react-native';

const Main = require('@assets/images/home/MainImage.png');

const HomeLayout = () => {
  return (
    <styles.Box>
      <styles.MainImage source={Main} resizeMode="stretch">
        <styles.Top />
        <Title
          width={'23.34987277%'}
          height={'3.52112676%'}
          style={{flex: 1, alignSelf: 'center'}}
        />
        <TouchableOpacity>
          <styles.TimeBox>
            <RefreshImage
              width={'16.32653061%'}
              height={'12.90322580%'}
              style={{flex: 1, top: '12%', left: '11%'}}
            />
            <styles.TimeBoxContent numberOfLines={2}>
              지금 붕어빵{'\n'}주문하면?
            </styles.TimeBoxContent>
            <styles.TimeBoxTime>120분</styles.TimeBoxTime>
          </styles.TimeBox>
        </TouchableOpacity>
        <HomeCatImage />
      </styles.MainImage>
    </styles.Box>
  );
};

export default HomeLayout;
