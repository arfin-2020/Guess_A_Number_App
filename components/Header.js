
import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import Colors from '../constant/color';
import TitleText from './TitleText';


const Header = (props) => {
    return (
        <View style={styles.Header}>
            <TitleText style={styles.titleStyle}>{props.title}</TitleText>
        </View>
  )
  
};



const styles = StyleSheet.create({
  Header:{
    width: '100%',
    height : 90,
    paddingTop: 36,
    backgroundColor: Platform.OS == 'android' ? Colors.accent : 'white',
    alignItems:'center',
    justifyContent:'center',
    
  },
  titleStyle:{
    color: Platform.OS == 'android' ? 'white' : 'red',
  }
 
})

export default Header;

