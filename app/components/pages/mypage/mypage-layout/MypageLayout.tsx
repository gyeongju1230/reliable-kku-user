import * as styles from '@components/pages/mypage/mypage-layout/MypageLayout.style';
import MypageName from '@components/pages/mypage/mypage-name/MypageName';
import MypageLevel from '@components/pages/mypage/mypage-level/MypageLevel';
import MypageCalendar from '@components/pages/mypage/mypage-calendar/MypageCalendar';
import MypageModal from '@components/pages/mypage/mypage-modal/MypageModal';
import {useEffect, useState} from 'react';
import {MypageMember} from '@/apis/Mypage/Mypage';

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
