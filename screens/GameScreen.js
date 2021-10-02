import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';


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
    const [currentGuess, setCurrentGuess] =
        useState(generateRandomBetween(1, 100, props.userChoice));

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const nextGuessHandler = (direction) => {
        if (
            (direction === 'lower' && currentGuess < props.userChoice) ||
            (direction === 'greater' && currentGuess > props.userChoice)
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
        setCurrentGuess(nextNumber)
    }
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="lower" onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title="Greater" onPress={nextGuessHandler.bind(this, 'greater')} />
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