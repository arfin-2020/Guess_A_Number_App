import react from 'react-native';
import {Text, View, StyleSheet} from 'react-native' ;


const TitleText = (props) => <Text style={styles.body}>{props.children}</Text>


const styles = StyleSheet.create({
    body:{
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
    }
})
export default TitleText;

