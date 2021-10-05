import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import defaultStyle from '../constant/default-style';
import ButtonMain from '../components/ButtonMain';
const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndnum = Math.floor(Math.random() * (max - min)) + min;

    if (rndnum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndnum;
    }
}

const GameScreen = (props) => {
    const {userChoice, onGameOver} = props;
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice));
    const [rounds, setRounds] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    

    useEffect(()=>{
        if(currentGuess === userChoice){
            onGameOver(rounds)
        }
    },[currentGuess,userChoice,onGameOver])

    const nextGuessHandler = (direction) => {
        if (
            (direction === 'lower' && currentGuess < userChoice) ||
            (direction === 'greater' && currentGuess > userChoice)
        ) {
            Alert.alert("don't lie!", 'you know that is wrong......', [
                { text: 'sorry!', style: 'cancel' }
            ]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        
        const nextNumber = generateRandomBetween
        (
            currentLow.current,
             currentHigh.current, 
             currentGuess
        )
        setCurrentGuess(nextNumber);
        setRounds(curRounds  => curRounds + 1);
    }
    return (
        <View style={styles.screen}>
            <Text style={defaultStyle.title}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <ButtonMain children={"lower"}  onPress={nextGuessHandler.bind(this, 'lower')} />
                <ButtonMain children={"Greater"} onPress={nextGuessHandler.bind(this, 'greater')} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',

    },
    buttonContainer: {
        flexDirection: 'row',
        maxWidth: '80%',
        width: 300,
        justifyContent: 'space-between',
        marginTop: 20
    }
})
export default GameScreen;