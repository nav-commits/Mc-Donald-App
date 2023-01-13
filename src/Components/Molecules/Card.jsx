import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';

export default function Card({img, button}) {
    return (
        <View style={styles.container}>
            {img}
            {button}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 2, height: 3 },
        shadowColor: 0.5,
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        marginLeft: 30,
        marginRight: 30,
    },
});
