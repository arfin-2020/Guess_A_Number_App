
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

const App = () => {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);


  const starGameHandler = (selectedNumber)=>{
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }

  const gameOverHandler = (numOfRounds) =>{
    setGuessRounds(numOfRounds);
  }

  let content = <StartGameScreen onStartGame ={starGameHandler} />;

  if(userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  }
  else if(guessRounds > 0 ){
    content = <GameOverScreen/>
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess the Number'/>
      {content}
    </View>
   
  );
};

const styles = StyleSheet.create({
  screen: {
    flex:1,
  },
});

export default App;
