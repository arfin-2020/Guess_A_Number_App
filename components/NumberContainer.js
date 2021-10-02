import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Colors from '../constant/color';

const NumberContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberStyle}>{props.children}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        borderWidth: 3,
        borderColor: '#e74c3c',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems:'center',
        justifyContent: 'center'
    },
    numberStyle:{
        fontSize: 22,
        color: '#e74c3c',
    }
})
export default NumberContainer;