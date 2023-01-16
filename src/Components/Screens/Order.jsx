import { View, Text, StyleSheet  } from 'react-native';
import TopBar from '../Molecules/TopBar';
import Title from '../Atoms/Title';

export default function Order() {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <TopBar content={<Text style={styles.titleText}>Order</Text>} alignItems='flex-start' />
            <Title title='Burgers' />
        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 30,
        paddingTop: 20
    },
});
