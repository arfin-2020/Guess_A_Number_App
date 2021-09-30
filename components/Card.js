import React from 'react';
import { StyleSheet, View } from 'react-native';


const Card = (props) =>{
    return(
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    )
}



const styles = StyleSheet.create({
    card:{
        // width:300,
        // maxWidth: '80%',
        // alignItems:'center',
        // shadowColor:'black',
        // shadowRadius:6,
        // shadowOffset:{width:0, height:2},
        // shadowOpacity: 0.26,
        elevation:8,
        backgroundColor:'white',
        padding: 20,
        borderRadius:10,
    }
})
export default Card;
