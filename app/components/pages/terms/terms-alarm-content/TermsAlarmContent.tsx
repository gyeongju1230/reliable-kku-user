import * as styles from '@components/pages/terms/terms-alarm-content/TermsAlarmContent.style';
import Check from '@assets/icons/common/TermsCheckBox.svg';
import MarginTop from '@components/common/MarginTop';

const TermsAlarmContent = () => {
  return (
    <styles.Box>
      <styles.ContentContainer>
        <styles.TitleContainer>
          <styles.ImageBox>
            <Check width={11} height={18} />
          </styles.ImageBox>
          <styles.TitleBox>
            <styles.Title>제 1조 목적</styles.Title>
          </styles.TitleBox>
        </styles.TitleContainer>
        <MarginTop height={9} />
        <styles.ContentBox>
          <styles.Content>
            이용자는 든붕이의 정보알림수신동의를 수신해야만 합니다.{'\n'}
            든붕이가 제공하는 이용자 맞춤형 서비스 알람은 전자우편이나 문자,
            푸시, 배너 알림, 전화 등을 통해 이용자에게 제공합니다.{'\n'} 보안
            알림 수신 동의는 거부가 불가하며, 동의하지 않는 이용자는 서비스
            사용이 제한됩니다.{'\n'} 단, 운영자는 정보알림수신동의를 마케팅
            목적으로 이용해서는 아니 됩니다.{'\n'} 마케팅 목적으로 알림을 사용할
            경우, 이용자에게 다시 동의를 받아야 합니다.
          </styles.Content>
        </styles.ContentBox>
        <MarginTop height={18} />
      </styles.ContentContainer>
    </styles.Box>
  );
};

export default TermsAlarmContent;
