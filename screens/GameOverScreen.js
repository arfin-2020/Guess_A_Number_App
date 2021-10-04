import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const GameOverScreen = (props) =>{
    const {roundsNumber, userNumber,newGame} = props
    return(
        <View style={styles.screen}>
            <Text>This Game is over....</Text>
            <Text>Number of Rounds {roundsNumber}</Text>
            <Text>Number was {userNumber}</Text>
            <Button title='NEW Game' onPress={newGame}/>
        </View>
    )

}



const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    }
})
export default GameOverScreen;