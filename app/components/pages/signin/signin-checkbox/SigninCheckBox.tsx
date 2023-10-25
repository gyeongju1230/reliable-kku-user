import React, {useState} from 'react';
import * as styles from '@components/pages/signin/signin-checkbox/SigninCheckBox.style';
import Check from '@assets/icons/common/CheckBox.svg';
import UnCheck from '@assets/icons/common/UnCheckBox.svg';
import {TouchableOpacity} from 'react-native';

const SigninCheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <styles.Box>
      <styles.CheckContainer>
        <TouchableOpacity onPress={toggleCheck}>
          {isChecked ? (
            <Check width={16} height={16} />
          ) : (
            <UnCheck width={16} height={16} />
          )}
        </TouchableOpacity>
        <styles.CheckBox>자동 로그인</styles.CheckBox>
      </styles.CheckContainer>
    </styles.Box>
  );
};

export default SigninCheckBox;
