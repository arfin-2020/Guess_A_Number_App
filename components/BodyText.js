import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';


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
        fontSize: Dimensions.get('window').width > 390 ? 18 : 15,
    }
})

export default BodyText;

