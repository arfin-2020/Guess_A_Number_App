import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const TitleText = (props) => {
    return(
        <View>
            <Text style={{...styles.title, ...props.style}}>{props.children}</Text>
        </View>
    )
}

    



const styles = StyleSheet.create({
    title:{
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
    }
})
export default TitleText;

