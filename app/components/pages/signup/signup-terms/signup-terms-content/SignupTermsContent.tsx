import {TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as styles from '@components/pages/signup/signup-terms/signup-terms-content/SignupTermsContent.style';
import Check from '@assets/icons/common/CheckBox.svg';
import UnCheck from '@assets/icons/common/UnCheckBox.svg';
import TermsUnCheck from '@assets/icons/common/TermsUnCheckBox.svg';
import TermsCheck from '@assets/icons/common/TermsCheckBox.svg';
import MoreButton from '@assets/icons/common/MoreButton.svg';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const SignupTermsContent = () => {
  const [isTermsAllChecked, setIsTermsAllChecked] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isTermsAlarmChecked, setIsTermsAlarmChecked] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const updateAllCheck = () => {
    const allCheckd = !isTermsAllChecked;
    setIsTermsAllChecked(allCheckd);
    setIsTermsChecked(allCheckd);
    setIsTermsAlarmChecked(allCheckd);
  };

  const updateTermsCheck = () => {
    const termsChecked = !isTermsChecked;
    setIsTermsChecked(termsChecked);

    if (termsChecked && isTermsAlarmChecked) {
      setIsTermsAllChecked(true);
    } else {
      setIsTermsAllChecked(false);
    }
  };

  const updateTermsAlarmCheck = () => {
    const termsAlarmChecked = !isTermsAlarmChecked;
    setIsTermsAlarmChecked(termsAlarmChecked);

    if (termsAlarmChecked && isTermsChecked) {
      setIsTermsAllChecked(true);
    } else {
      setIsTermsAllChecked(false);
    }
  };

  useEffect(() => {
    setIsButtonActive(
      isTermsAllChecked && isTermsChecked && isTermsAlarmChecked,
    );
  }, [isTermsAllChecked, isTermsChecked, isTermsAlarmChecked]);

  return (
    <styles.Box>
      <styles.AllTermsBox>
        <styles.AllTermsContentBox>
          <TouchableOpacity onPress={updateAllCheck}>
            {isTermsAllChecked ? (
              <Check width={20} height={20} />
            ) : (
              <UnCheck width={20} height={20} />
            )}
          </TouchableOpacity>
          <styles.AllTermsContent>전체 동의하기</styles.AllTermsContent>
        </styles.AllTermsContentBox>
      </styles.AllTermsBox>
      <styles.TermsBox>
        <styles.TermsContentBox>
          <TouchableOpacity onPress={updateTermsCheck}>
            {isTermsChecked ? (
              <TermsCheck width={15} height={11} />
            ) : (
              <TermsUnCheck width={15} height={11} />
            )}
          </TouchableOpacity>
          <styles.TermsContent>(필수) 이용약관 동의</styles.TermsContent>
          <TouchableOpacity>
            <MoreButton width={20} height={20} />
          </TouchableOpacity>
        </styles.TermsContentBox>
        <styles.TermsContentBox>
          <TouchableOpacity onPress={updateTermsAlarmCheck}>
            {isTermsAlarmChecked ? (
              <TermsCheck width={15} height={11} />
            ) : (
              <TermsUnCheck width={15} height={11} />
            )}
          </TouchableOpacity>
          <styles.TermsContent>(필수) 정보 알림 수신 동의</styles.TermsContent>
          <TouchableOpacity>
            <MoreButton width={20} height={20} />
          </TouchableOpacity>
        </styles.TermsContentBox>
      </styles.TermsBox>
      <TouchableOpacity
        onPress={() => {
          if (isButtonActive) {
            navigation.navigate('Signup');
          }
        }}>
        <styles.TermsButton
          style={{
            backgroundColor: isButtonActive ? '#FFCA42' : '#d9d9d9',
          }}>
          <styles.TermsButtonContent>
            동의하고 계속하기
          </styles.TermsButtonContent>
        </styles.TermsButton>
      </TouchableOpacity>
    </styles.Box>
  );
};

export default SignupTermsContent;
