
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constant/color';
const Header = (props) => {
    return (
        <View style={styles.Header}>
            <Text style={styles.Headertitle}>{props.title}</Text>
        </View>
  )
  
};



const styles = StyleSheet.create({
  Header:{
    width: '100%',
    height : 90,
    paddingTop: 36,
    backgroundColor: Colors.accent,
    alignItems:'center',
    justifyContent:'center',
  },
  Headertitle:{
    color:'black',
    fontSize:18,
  }
})

export default Header;

