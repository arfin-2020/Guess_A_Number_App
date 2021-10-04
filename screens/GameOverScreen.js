import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
const GameOverScreen = (props) =>{
    const {roundsNumber, userNumber,newGame} = props
    return(
        <View style={styles.screen}>
            <TitleText>This Game is over....</TitleText>
            <BodyText>Number of Rounds {roundsNumber}</BodyText>
            <View style={styles.imageContainer}>
            <Image 
            fadeDuration={1000}
            // source={require('../assets/success.jpg')} 
            source = {{uri:'https://tgr.scdn2.secure.raxcdn.com/images/wysiwyg/_article/istockphoto-485966046-612x612.jpg'}} style={styles.imageStyle}
                // resizeMode='stretch'
                resizeMode='cover'
            />
            </View>
            <BodyText>Number was {userNumber}</BodyText>
            <Button title='NEW Game' onPress={newGame}/>
        </View>
    )

}



const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    imageStyle:{
        height: '100%',
        width:'100%',
    },
    imageContainer:{
        borderRadius: 150,
        borderWidth:3,
        borderColor:'black',
        width: 300,
        height: 300,
        overflow:'hidden',



    }
})
export default GameOverScreen;