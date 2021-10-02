
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
const App = () => {
  return (
    <View style={styles.screen}>
      <Header title='Hello this is header title'/>
      <StartGameScreen/>
      <GameScreen/>
    </View>
   
  );
};

const styles = StyleSheet.create({
  screen: {
    flex:1,
  },
});

export default App;
