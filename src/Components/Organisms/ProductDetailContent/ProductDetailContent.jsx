import { StyleSheet, View, Text, Image } from 'react-native';
import LabelItem from '../../Molecules/LabelItem/LabelItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ProductDetailContent({ dataContent }) {
    return (
        <View>
            {dataContent.map((item) =>
                item.BurgerType?.map((burger, i) => (
                    <LabelItem
                        key={i}
                        content={
                            <View>
                                <Text style={styles.featured}>{burger.Featured}</Text>
                                <Text style={styles.titleText}>{burger.title}</Text>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Text> ${burger.standardPrice?.price}</Text>
                                    <Text style={{ paddingLeft: 5 }}>{burger.standardPrice?.cal} cals</Text>
                                </View>
                                <Text style={{ paddingLeft: 8, fontWeight: 'bold', fontSize: 12 }}>
                                    meal
                                </Text>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Text> ${burger.mealPrice?.price}</Text>
                                    <Text style={{paddingLeft: 5}}>{burger.standardPrice?.cal} cals</Text>
                                </View>
                            </View>
                        }
                        alignItems='flex-start'
                        justifyContent='space-between'
                        flexDirection='row'
                        icon={<Icon name={burger.icon} size={25} style={{ paddingTop: 20 }} />}
                        img={
                            <Image source={{ uri: burger.img }} style={{ width: 58, height: 55 }} />
                        }
                    />
                ))
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 5,
    },
    featured: {
        color: 'red',
        fontSize: 10,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
});
