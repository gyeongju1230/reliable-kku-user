import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Margin from '@components/common/Margin';
import Logo from '../app/assets/images/LandingPage.svg';

function App() {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text>HOME</Text>
      <Margin height={100} width={50} />
      <Text>CONTENT</Text>
      <Logo width={100} height={100} fill={'#FFF'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
    backgroundColor: '#FFCA42',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
