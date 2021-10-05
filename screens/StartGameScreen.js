import React, { useState } from 'react';
import { Alert, Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import BodyText from '../components/BodyText';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import TitleText from '../components/TitleText';
import Colors from '../constant/color';
import ButtonMain from '../components/ButtonMain';
const StartGameScreen = (props) => {

    const [enterdValue, setEnterValue] = useState('')
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();


    const numberInputHandler = (inputNumebr) => {
        setEnterValue(inputNumebr.replace(/[^0-9]/g, ''));
    }
    const resetInputHandler = () => {
        setEnterValue('');
        setConfirmed(false)
    }
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enterdValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Number has to be a number between 1 to 99.',
                [{ text: 'Okey', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        setConfirmed(true)
        setEnterValue('');
        setSelectedNumber(chosenNumber)
        Keyboard.dismiss();
    }
    let confirmedOutput;
    if (confirmed) {
        confirmedOutput =
            (
                <Card style={styles.summaryContainer}>
                    <Text>You are selected</Text>
                    <NumberContainer children={selectedNumber}/>
                    <ButtonMain children={'start Game'} onPress={()=>props.onStartGame(selectedNumber)}/>
                    
           
                    
                </Card>
            )
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <TitleText style={styles.title}>Start a new Game</TitleText>
                <Card style={styles.inputContainer}>
                    <BodyText>Select a New Nubmer</BodyText>
                    <Input style={styles.input} blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enterdValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonStyle}><Button title='Reset' color={Colors.accent} onPress={resetInputHandler} /></View>
                        <View style={styles.buttonStyle}><Button title='Confirm' color={Colors.primary} onPress={confirmInputHandler} /></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>

    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        marginVertical: 10,
        fontFamily: 'DancingScript-Regular',
       
    },
  
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        // shadowColor:'black',
        // shadowRadius:6,
        // shadowOffset:{width:0, height:2},
        // shadowOpacity: 0.26,
        // elevation:8,
        // backgroundColor:'white',
        // padding: 20,
        // borderRadius:10,
    },
    buttonContainer: {

        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },

    buttonStyle: {
        width: 100,
    },
    input: {
        width: 50
    },
    summaryContainer: {
        marginTop: 20,
        alignItems:'center'
    }
})

export default StartGameScreen;