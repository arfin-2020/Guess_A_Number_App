import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constant/color';
const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game</Text>
            <Card style={styles.inputContainer}>
                <Text >Select a New Nubmer</Text>
                <Input style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='number-pad' maxLength={11} />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonStyle}><Button title='Reset' color={Colors.accent} onPress={() => { }} /></View>
                    <View style={styles.buttonStyle}><Button title='Confirm' color={Colors.primary} onPress={() => { }} /></View>
                </View>
            </Card>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
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
    }
})

export default StartGameScreen;