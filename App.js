import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';



// const fetchFonts = () => {

//   return Font.loadAsync({
//     'open-sans': require('./constant/assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./constant/assets/fonts/OpenSans-Bold.ttf')
//   });
// }



const App = () => {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  
  // if (!dataLoaded) {
  //   return (
  //   <AppLoading 
  //   startAsync={fetchFonts} 
  //   onFinish={() => setDataLoaded(true)} 
  //   onError={(error)=> console.log(error)}
  //   />
  //   );
  // }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  const starGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);

  }

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  }

  let content = <StartGameScreen onStartGame={starGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  }
  else if (guessRounds > 0) {
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} newGame={configureNewGameHandler} />
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Header title='Guess the Number' />
      {content}
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
