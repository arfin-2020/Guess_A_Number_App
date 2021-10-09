
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import BodyText from '../components/BodyText';
import ButtonMain from '../components/ButtonMain';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import defaultStyle from '../constant/default-style';
// import {screenOrientation} from 'expo';



const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndnum = Math.floor(Math.random() * (max - min)) + min;

    if (rndnum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndnum;
    }
}


const renderListItem = (value, numOfRounds) => {
    return (
        <View key={value} style={styles.itemlist}>
            <BodyText>#{numOfRounds}</BodyText>
            <BodyText>{value}</BodyText>
        </View>
    )
}
const GameScreen = (props) => {
    // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)

    const { userChoice, onGameOver } = props;
    const initiallGuesses = generateRandomBetween(1, 100, userChoice)
    const [currentGuess, setCurrentGuess] = useState(initiallGuesses);
    const [pastGuesses, setPastGuesses] = useState([initiallGuesses]);
    const [availableDeviceWidth,setAvailableDeviceWidth] = useState(Dimensions.get('window').width)
    const [availableDeviceHeight,setAvailableDeviceheight] = useState(Dimensions.get('window').height)
    const currentLow = useRef(1);
    const currentHigh = useRef(100);



    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length)
        }
    }, [currentGuess, userChoice, onGameOver])

    useEffect(()=>{
        const updateLayout = () =>{
            setAvailableDeviceWidth(Dimensions.get(window).width);
            setAvailableDeviceheight(Dimensions.get(window).height);
        }
        Dimensions.addEventListener('change',updateLayout);
        return (
            Dimensions.removeEventListener('change',updateLayout)
        )
    })

    const nextGuessHandler = (direction) => {
        if (
            (direction === 'lower' && currentGuess < userChoice) ||
            (direction === 'greater' && currentGuess > userChoice)
        ) {
            Alert.alert("don't lie!", 'you know that is wrong......', [
                { text: 'sorry!', style: 'cancel' }
            ]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }

        const nextNumber = generateRandomBetween
            (
                currentLow.current,
                currentHigh.current,
                currentGuess
            )
        setCurrentGuess(nextNumber);
        setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
    }

    if (Dimensions.get('window').height < 500) {
        return (
            <ScrollView>
                <View style={styles.screen}>
                <Text style={defaultStyle.title}>Opponent's Guess</Text>
                <View style={styles.control}>
                    <ButtonMain children={"lower"} onPress={nextGuessHandler.bind(this, 'lower')}>
                        <AntDesign name="minus" size={30} color="white" />
                    </ButtonMain>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <ButtonMain children={"Greater"} onPress={nextGuessHandler.bind(this, 'greater')} >
                        <Icon name="add-outline" size={30} color="white" />
                    </ButtonMain>
                </View>
                <View style={styles.listContainer}>
                    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                        {
                            pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))
                        }
                    </ScrollView>
                </View>
            </View>
            </ScrollView>
        )
    }
    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text style={defaultStyle.title}>Opponent's Guess</Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Card style={styles.buttonContainer}>
                    <ButtonMain children={"lower"} onPress={nextGuessHandler.bind(this, 'lower')}>
                        <AntDesign name="minus" size={30} color="white" />
                    </ButtonMain>
                    <ButtonMain children={"Greater"} onPress={nextGuessHandler.bind(this, 'greater')} >
                        <Icon name="add-outline" size={30} color="white" />
                    </ButtonMain>
                </Card>
                <View style={styles.listContainer}>
                    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                        {
                            pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))
                        }
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',

    },
    buttonContainer: {
        flexDirection: 'row',
        maxWidth: '90%',
        width: 400,
        justifyContent: 'space-between',
        marginTop: Dimensions.get('window').height > 600 ? 20 : 10
        // marginTop:  20 ,
    },
    control: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%'
    },

    listContainer: {
        // width: '80%',
        flex: 1,
        width: Dimensions.get('window').width > 500 ? '80%' : '100%',

    },
    scrollViewContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    itemlist: {
        borderColor: '#ccc',
        borderWidth: 2,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    }
})
export default GameScreen;