import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Title({ title }) {
    return <Text style={styles.titleText}>{title}</Text>;
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 30,
        paddingTop: 20
    },
});
