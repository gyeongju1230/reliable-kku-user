import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Signin from '@screens/Signin';
import SignupTerms from '@screens/SignupTerms';
import Terms from '@screens/terms/Terms';
import TermsAlarm from '@screens/terms/TermsAlarm';
import Signup from '@screens/Sginup';
import FindPassword from '@screens/FindPassword';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="SignupTerms" component={SignupTerms} />
          <Stack.Screen name="Terms" component={Terms} />
          <Stack.Screen name="TermsAlarm" component={TermsAlarm} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="FindPassword" component={FindPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
export default App;
