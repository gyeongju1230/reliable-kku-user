import * as styles from '@components/pages/mypage/mypage-layout/MypageLayout.style';
import MypageName from '@components/pages/mypage/mypage-name/MypageName';
import MypageLevel from '@components/pages/mypage/mypage-level/MypageLevel';
import MypageCalendar from '@components/pages/mypage/mypage-calendar/MypageCalendar';
import MypageModal from '@components/pages/mypage/mypage-modal/MypageModal';
import {useEffect, useState} from 'react';
import {MypageMember} from '@/apis/Mypage/Mypage';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {Alert} from 'react-native';

const MypageLayout = () => {
  const [realName, setRealName] = useState('');
  const [level, setLevel] = useState('');

  useEffect(() => {
    MypageMember()
      .then(response => {
        setRealName(response.realName);
        setLevel(response.level);
      })
      .catch(error => {
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
        console.error('Error', error);
      });
  }, []);

  return (
    <styles.Box>
      <styles.Top />
      <MypageName realName={realName} />
      <styles.MypageLevelTop />
      <MypageLevel level={level} />
      <styles.MypageCalendarTop />
      <MypageCalendar />
      <MypageModal />
    </styles.Box>
  );
};

export default MypageLayout;
