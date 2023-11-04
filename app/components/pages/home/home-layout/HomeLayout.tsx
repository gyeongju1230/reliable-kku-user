import * as styles from '@components/pages/home/home-layout/HomeLayout.style';
import Title from '@assets/images/home/MainTitle.svg';
import HomeCatImage from '@components/pages/home/home-cat-image/HomeCatImage';

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

        <HomeCatImage />
      </styles.MainImage>
    </styles.Box>
  );
};

export default HomeLayout;
