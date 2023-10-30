import * as styles from '@components/pages/mypage/mypage-layout/MypageLayout.style';
import MypageName from '@components/pages/mypage/mypage-name/MypageName';
import MypageLevel from '@components/pages/mypage/mypage-level/MypageLevel';
import MypageCalendar from '@components/pages/mypage/mypage-calendar/MypageCalendar';
import MypageModal from '@components/pages/mypage/mypage-modal/MypageModal';
import MarginTop from '@components/common/MarginTop';

const MypageLayout = () => {
  return (
    <styles.Box>
      <styles.Top />
      <MypageName />
      <styles.MypageLevelTop />
      <MypageLevel />
      <styles.MypageCalendarTop />
      <MypageCalendar />
      <MypageModal />
    </styles.Box>
  );
};

export default MypageLayout;
