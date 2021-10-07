import React from 'react';
import { StyleSheet, Text, View , Dimensions} from 'react-native';


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
        fontSize: Dimensions.get('window').fontSize > 600 ? 18 : 15,
 
    }
})
export default TitleText;

