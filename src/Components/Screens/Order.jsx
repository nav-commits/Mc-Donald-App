import { View, Text, StyleSheet, FlatList, Linking } from 'react-native';
import TopBar from '../Molecules/TopBar';
import Title from '../Atoms/Title';
import { BreakfastSandwhiches } from '../../data/data.json';
import { Burgers } from '../../data/data.json';
import MenuItem from '../Molecules/MenuItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Order() {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <TopBar content={<Text style={styles.titleText}>Order</Text>} alignItems='flex-start' />
            <Title title='Explore our menu' size={13} paddingLeft={10} paddingTop={15} />
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Title
                    title='Breakfast Sandwhiches and Buritos'
                    size={15}
                    paddingLeft={10}
                    paddingTop={20}
                />
                <Text
                    onPress={() => Linking.openURL('http://google.com')}
                    style={{ paddingTop: 20, paddingRight: 10, color: '#357EC7' }}
                >
                    View all
                     <Ionicons name={'arrow-forward'}/>
                </Text>
               
            </View>

            <FlatList
                style={styles.listStyle}
                keyExtractor={(key) => {
                    return key.id;
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={BreakfastSandwhiches}
                renderItem={({ item }) => {
                    return (
                        <MenuItem
                            title={item.title}
                            price={item.standardPrice.price}
                            cal={item.standardPrice.cal}
                            img={item.img}
                        />
                    );
                }}
            />
            <Title title='Burgers' size={15} paddingLeft={10} paddingTop={15} />
            <FlatList
                style={styles.listStyle}
                keyExtractor={(key) => {
                    return key.id;
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={Burgers}
                renderItem={({ item }) => {
                    return (
                        <MenuItem
                            title={item.title}
                            price={item.standardPrice.price}
                            cal={item.standardPrice.cal}
                            img={item.img}
                        />
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 5,
        paddingTop: 20,
    },
    title: {
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    listStyle: {
        textAlign: 'center',
        margin: 15,
        padding: 10,
    },
});
