import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function TopBar() {
    return (
        <View style={styles.container}>
           <Image source={require('../../../assets/McDonald.png')} style={{width: 55, height: 28}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        marginTop: 5,
        padding: 5
    },
    
});