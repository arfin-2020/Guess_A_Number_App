import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import Colors from '../constant/color'

const ButtonMain = (props) =>{
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
            <View style={styles.button}> 
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: Colors.primary,
        paddingVertical:12,
        paddingHorizontal:25,
      
    },
    buttonText:{
        color: Colors.secondary,
        fontFamily: 'OpenSans-Regular',
        fontSize: 18,
    },
})

export default ButtonMain;