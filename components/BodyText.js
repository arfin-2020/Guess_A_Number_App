import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const BodyText = (props) => {
    return(
        <View>
        <Text style={{...styles.body, ...props.style}}>{props.children}</Text>
        </View>
    )
}
    



const styles = StyleSheet.create({
    body:{
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
    }
})

export default BodyText;

