import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game</Text>
            <View style={styles.inputContainer}>
                <Text >Select a New Nubmer</Text>
                <TextInput placeholder="white something" />
                <View style={styles.buttonContainer}>
                    <Button style={styles.buttonStyle} title='Reset' onPress={() => { }} />
                    <Button style={styles.buttonStyle} title='Confirm' onPress={() => { }} />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize:20,
        marginVertical:10,
    },
    inputContainer: {
        width:300,
        maxWidth: '80%',
        alignItems:'center'
    },
    buttonContainer: {
        
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal:15,
    },

    // buttonStyle:{
    //     marginLeft:30
    // }
})

export default StartGameScreen;