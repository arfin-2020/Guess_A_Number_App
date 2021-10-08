import React, { useEffect, useState } from 'react';
import {
    Alert,
    Button,
    Dimensions,
    Keyboard, KeyboardAvoidingView, ScrollView,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import BodyText from '../components/BodyText';
import ButtonMain from '../components/ButtonMain';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import TitleText from '../components/TitleText';
import Colors from '../constant/color';


const StartGameScreen = (props) => {

    const [enterdValue, setEnterValue] = useState('')
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width/4)

    

    const numberInputHandler = (inputNumebr) => {
        setEnterValue(inputNumebr.replace(/[^0-9]/g, ''));
    }
    const resetInputHandler = () => {
        setEnterValue('');
        setConfirmed(false)

    }

    useEffect(()=>{
        const updateLayout = () =>{
            setButtonWidth(Dimensions.get('window').width/4)
        }
    
        Dimensions.addEventListener('change', updateLayout);
        return () =>{
            Dimensions.remove('change', updateLayout)
        }
    })

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
        <ScrollView>
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            
            <View style={styles.screen}>
                <TitleText style={styles.title}>Start a new Game</TitleText>
                <Card style={styles.CardContainer}>
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
                        <View style={{width:buttonWidth}}>
                            <Button title='Reset' color={Colors.accent} onPress={resetInputHandler} /></View>
                        <View style={{width:buttonWidth}}>
                            <Button title='Confirm' color={Colors.primary} onPress={confirmInputHandler} /></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
           
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </ScrollView>
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
  
    CardContainer: {
        width: '80%',
        maxWidth: '95%',
        minWidth:300,
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
        // width: 90,
        width: Dimensions.get('window').width/4
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