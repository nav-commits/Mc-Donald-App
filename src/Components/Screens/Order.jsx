import { View, Text, StyleSheet } from 'react-native';
import TopBar from '../Molecules/TopBar';
import Title from '../Atoms/Title';
import { data } from '../../data/data.json';
// import Swiper from 'react-native-swiper';
import MenuItem from '../Molecules/MenuItem';

export default function Order() {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <TopBar content={<Text style={styles.titleText}>Order</Text>} alignItems='flex-start' />
            <Title title='Explore our menu' />
            <Title title='Breakfast Sandwhiches and Buritos' />

            {/* <Swiper showsButtons={true} showsPagination={false} > */}

            <View style={styles.container}>
                {data.map((item, i) => {
                    return (
                        <MenuItem
                            key={i}
                            title={item.title}
                            price={item.standardPrice.price}
                            cal={item.standardPrice.cal}
                            img={item.img}
                        />
                    );
                })}
            </View>

            {/* </Swiper> */}
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
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
    },
});
