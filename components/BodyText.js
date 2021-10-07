import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


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
        fontSize: Dimensions.get('window').fontSize > 600 ? 18 : 15,
    }
})

export default BodyText;

