import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';


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
        fontSize: Dimensions.get('window').width > 390 ? 18 : 15,
 
    }
})
export default TitleText;

