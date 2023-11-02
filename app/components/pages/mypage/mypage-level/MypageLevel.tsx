import * as styles from '@components/pages/mypage/mypage-level/MypageLevel.style';
import Level from '@assets/images/mypage/LevelIcon.svg';
import GuideIcon from '@assets/images/mypage/GuideIcon.svg';
import {Modal, Pressable, SafeAreaView, TouchableOpacity} from 'react-native';
import {useState} from 'react';

interface MypageLevelProps {
  level: string;
}

const MypageLevel = ({level}: MypageLevelProps) => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(!isModal);
  };

  return (
    <styles.LevelBox>
      <Level width={17} height={17} />
      <styles.Level>현재 나의 붕레벨 Lv.{level}</styles.Level>
      <TouchableOpacity
        onPress={openModal}
        style={{position: 'absolute', bottom: '0%', right: '0%'}}>
        <styles.GuideBox>
          <GuideIcon width={9} height={9} />
          <styles.GuideText>붕레벨이란?</styles.GuideText>
        </styles.GuideBox>
      </TouchableOpacity>
      <Modal
        visible={isModal}
        onRequestClose={() => setIsModal(false)}
        transparent={true}
        animationType="none"
        style={{margin: 0}}>
        <SafeAreaView style={{flex: 1, top: '29%', left: '62.3%'}}>
          <Pressable onPress={() => setIsModal(false)} style={{flex: 1}}>
            <styles.ModalContainer>
              <styles.ModalContent>
                붕어빵을 먹으면 캘린더에 붕어배지가 달려요! 도장 개수 5개를
                달성할 때마다 레벨이 올라가요.
              </styles.ModalContent>
            </styles.ModalContainer>
          </Pressable>
        </SafeAreaView>
      </Modal>
    </styles.LevelBox>
  );
};

export default MypageLevel;
