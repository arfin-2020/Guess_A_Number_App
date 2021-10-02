
import React,{useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
const App = () => {

  const [userNumber, setUserNumber] = useState();
  const starGameHandler = (selectedNumber)=>{
    setUserNumber(selectedNumber);
  }

  let content = <StartGameScreen onStartGame ={starGameHandler} />;

  if(userNumber){
    content = <GameScreen userChoice={userNumber}/>
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
