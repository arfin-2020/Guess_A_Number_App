import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';


const  generateRandomBetween = (max, min, exclude) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndnum = Math.floor(Math.random() * (max -min)) + min;

    if(rndnum === exclude){
        return generateRandomBetween(min,max,exclude);
    }
    else{
        return rndnum;
    }
}

const GameScreen = () =>{
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1,100, props.userChoice))
   
    return(
        <View style={styles.screen}>
                <Text>Opponent's Guess</Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Card style={styles.buttonContainer}>
                    <Button title="lower"/>
                    <Button title="Greater"/>
                </Card>
        </View>
    )
}

const styles =  StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems: 'center',

    },
    buttonContainer:{
        flexDirection: 'row',
        maxWidth: '80%',
        width: 300,
        justifyContent: 'space-between',
        marginTop: 20
    }
})
export default GameScreen;