import React from 'react';
import { Dimensions, Image, Linking, ScrollView, StyleSheet, 
Text, TouchableOpacity, View,  } from 'react-native';
import BodyText from '../components/BodyText';
import ButtonMain from '../components/ButtonMain';
import TitleText from '../components/TitleText';
import Colors from '../constant/color';

const GameOverScreen = (props) => {
    const { roundsNumber, userNumber, newGame } = props;
    console.log({
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    })
    return (
  
           <ScrollView>
            <View style={styles.screen}>
            <TitleText>This Game is over....</TitleText>
            <BodyText>Number of Rounds {roundsNumber}</BodyText>
            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={1000}
                    // source={require('../assets/success.jpg')} 
                    source={{ uri: 'https://mir-s3-cdn-cf.behance.net/user/276/32b61e238986733.5bd1a477b4ee6.jpg' }} style={styles.imageStyle}
                    // resizeMode='stretch'
                    resizeMode='cover'
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}> তোমার ফোনে <Text style={styles.hightlight}>{roundsNumber} </Text> বার লেগেছে <Text style={styles.hightlight}>{userNumber}</Text> নাম্বার আন্দাজ করতে । </BodyText>
            </View>
            <ButtonMain children={'NEW Game'} onPress={newGame} />
            <View style={{marginTop:Dimensions.get('window').width > 390 ? 70 : 20}}>
                <TouchableOpacity
                    onPress={() =>
                        Linking.openURL(
                            'https://github.com/arfin-2020'
                        )
                    }>
                    <Text>Developed By <Text style={{color: Colors.primary, fontFamily:'OpenSans-Bold'}}>Arfin Chowdhury Arif</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
       </ScrollView>
    
    )

}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    imageStyle: {
        height: '100%',
        width: '100%',
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        // width: 300,
        // height: 300,
        width: Dimensions.get('window').width > 390? 300 : 190,
        height: Dimensions.get('window').height > 753 ? 300 : 190,
        overflow: 'hidden',
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height/40,
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').width > 390 ? 20 : 15,
    },
    hightlight: {
        color: Colors.accent,
        fontFamily: 'DancingScript-Regular',
    }
})
export default GameOverScreen;