import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Margin from '@components/common/Margin';

function App() {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text>HOME</Text>
      <Text>HOME121212</Text>
      <Margin height={100} width={50} />
      <Text>CONTENT</Text>
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
