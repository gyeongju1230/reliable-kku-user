import * as styles from '@components/pages/mypage/mypage-calendar/MypageCalendar.style';
import {Calendar} from 'react-native-calendars';

function getCurrentDate(): string {
  const today = new Date();
  const year = today.getFullYear().toString();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const MypageCalendar = () => {
  return (
    <styles.Box>
      <Calendar
        theme={{
          calendarBackground: '#ECEAE0',
          arrowColor: '#0000004D',
        }}
        markedDates={{
          [getCurrentDate()]: {
            selected: true,
            selectedColor: '#FFCA42',
            selectedTextColor: '#000',
          },
        }}
        renderHeader={date => {
          const year = date.toString('yyyy');
          const month = date.toString('MM');
          const formattedDate = `${year}년 ${month}월`;
          return <styles.Text>{formattedDate}</styles.Text>;
        }}
      />
    </styles.Box>
  );
};

export default MypageCalendar;
