import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TouchableNativeFeedback, Platform, Touchable } from 'react-native';
import Colors from '../constant/color';

const ButtonMain = (props) =>{

    let ButtonComponent = TouchableOpacity;

    if(Platform.Version >= 21){
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.buttonContainer}>
            <ButtonComponent activeOpacity={0.8} onPress={props.onPress}>
            <View style={styles.button}> 
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </ButtonComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        borderRadius: 20,
        overflow:'hidden',
    },
    button:{
        backgroundColor: Colors.primary,
        paddingVertical:12,
        paddingHorizontal:25,
        borderRadius: 20,
      
    },
    buttonText:{
        color: Colors.secondary,
        fontFamily: 'OpenSans-Regular',
        fontSize: 18,
    },
})

export default ButtonMain;