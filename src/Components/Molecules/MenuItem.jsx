import { View, Text, StyleSheet, Image } from 'react-native';
export default function MenuItem({ title, price, cal,  }) {
    return (
        <View style={{width: 95}}>
            <View style={styles.container}>
                <Image
                    source={require('../../../assets/mcgriddle.png')}
                    style={{ width: '100%', height: 90, borderRadius: 5 }}
                />
            </View>

            <Text style={styles.title}>{title}</Text>
            <View style={{ display: 'flex', flexDirection: 'row',}}>
                <Text style={styles.priceSize}>$ {price}</Text>
                <Text style={styles.calsSize}>{cal} cals</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 10,
        fontWeight: 'bold',
        padding: 5
    },
    container: {
        borderRadius: 5,
        elevation: 2,
        backgroundColor: '#fff',
        shadowColor: 0.5,
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    priceSize: {
        fontSize: 10,
        
    },
    calsSize: {
        fontSize: 10,
        paddingLeft: 5
    }
});
