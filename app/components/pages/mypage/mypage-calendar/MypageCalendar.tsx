import * as styles from '@components/pages/mypage/mypage-calendar/MypageCalendar.style';
import {Calendar} from 'react-native-calendars';
import {Alert, Text, View} from 'react-native';

import CalenderImage from '@/assets/images/mypage/CalendarIcon.svg';
import {useEffect, useState} from 'react';
import {MyPageCalendarApi} from '@/apis/Mypage/calendar/MyPageCalendarApi';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

function getCurrentDate(): string {
  const today = new Date();
  const year = today.getFullYear().toString();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

interface CalendarProps {
  orderedDay: number;
  isOrdered: boolean;
}

const MypageCalendar = () => {
  const [month, setMonth] = useState(new Date().getMonth() + 1); // +1을 추가하여 1부터 12까지의 월 값을 얻습니다.
  const [year, setYear] = useState(new Date().getFullYear());

  const [calendar, setCalendar] = useState<CalendarProps[]>([]);

  useEffect(() => {
    MyPageCalendarApi(year, month)
      .then(res => {
        console.log(res);
        setCalendar([]);
        setCalendar(res);
      })
      .catch(err => {
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
        console.log(err);
      });
  }, [month]);

  return (
    <styles.Box>
      <Calendar
        theme={{
          calendarBackground: '#ECEAE0',
          arrowColor: '#0000004D',
        }}
        onMonthChange={date => {
          setCalendar([]);
          setMonth(date.month);
          if (date.year !== year) {
            setYear(date.year);
          }
        }}
        hideExtraDays={true}
        dayComponent={({date, state, marking, theme}) => {
          if (date === undefined) {
            return <></>;
          }

          const matchingDate = calendar.find(
            item => item.orderedDay === date?.day,
          );

          return (
            <styles.CalendarBox>
              <styles.CalenderTextBox
                style={{
                  backgroundColor:
                    date.dateString === getCurrentDate() ? '#FFCA42' : '',
                }}>
                <Text>{date.day}</Text>
              </styles.CalenderTextBox>
              {matchingDate && matchingDate.isOrdered && (
                <CalenderImage width={26} height={23} />
              )}
            </styles.CalendarBox>
          );
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
