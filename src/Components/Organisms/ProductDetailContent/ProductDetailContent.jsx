import { StyleSheet, View, Text, Image } from 'react-native';
import LabelItem from '../../Molecules/LabelItem/LabelItem';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ProductDetailContent({ dataContent }) {
    return (
        <View>
            {dataContent.map((item, id) => (
                <View key={id}>
                    <Text style={styles.burgerTitle}> {item.burgerTitle}</Text>
                    {item.BurgerType?.map((burger, i) => (
                        <LabelItem
                            key={i}
                            content={
                                <View>
                                    <Text style={styles.featured}>{burger.Featured}</Text>
                                    <Text style={styles.titleText}>{burger.title}</Text>
                                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                                        <Text> ${burger.standardPrice?.price}</Text>
                                        <Text style={{ paddingLeft: 5 }}>
                                            {burger.standardPrice?.cal} Cals
                                        </Text>
                                    </View>
                                    <Text
                                        style={{ paddingLeft: 8, fontWeight: 'bold', fontSize: 12 }}
                                    >
                                        {burger.mealPrice?.title}
                                    </Text>
                                    {burger.mealPrice?.price && burger.standardPrice?.cal ? (
                                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                                            <Text> ${burger.mealPrice?.price}</Text>
                                            {burger.mealPrice?.cal.map((cal, idx) => (
                                                <Text key={idx} style={{ paddingLeft: 5 }}>
                                                    {cal}
                                                </Text>
                                            ))}
                                            <Text> Cals</Text>
                                        </View>
                                    ) : null}
                                </View>
                            }
                            alignItems='flex-start'
                            justifyContent='space-between'
                            flexDirection='row'
                            icon={<Icon name={burger.icon} size={25} style={{ paddingTop: 20 }} />}
                            img={
                                <Image
                                    source={{ uri: burger.img }}
                                    style={{ width: 58, height: 55 }}
                                />
                            }
                        />
                    ))}
                </View>
            ))}
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
        color: '#8B0000',
        fontSize: 13,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    burgerTitle: {
        paddingLeft: 10,
        paddingBottom: 15,
        fontSize: 24,
        fontWeight: 'bold',
    },
});
