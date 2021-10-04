import react from 'react-native';
import {Text, View, StyleSheet} from 'react-native' ;


const BodyText = (props) => <Text style={styles.body}>{props.children}</Text>


const styles = StyleSheet.create({
    body:{
        fontFamily: 'OpenSans-Regular',
        fontSize: 18,
    }
})
export default BodyText;

