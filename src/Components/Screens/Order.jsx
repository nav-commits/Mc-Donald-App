import { View, Text, StyleSheet, FlatList } from 'react-native';
import TopBar from '../Molecules/TopBar';
import Title from '../Atoms/Title';
import { BreakfastSandwhiches } from '../../data/data.json';
import { Burgers } from '../../data/data.json';
import MenuItem from '../Molecules/MenuItem';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import MenuTitleSection from '../Organisms/MenuTitleSection';

export default function Order() {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('ProductDetail');
    };
    return (
        <View>
            <TopBar content={<Text style={styles.titleText}>Order</Text>} alignItems='flex-start' />
            <Title title='Explore our menu' size={13} paddingLeft={10} paddingTop={15} />
            <MenuTitleSection
                title={'Breakfast Sandwhiches and Buritos'}
                onPress={onPress}
                size={15}
                paddingLeft={10}
                paddingTop={15}
                iconTitle="View all"
            />
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
            <MenuTitleSection
                title={'Burgers'}
                onPress={onPress}
                size={15}
                paddingLeft={10}
                paddingTop={20}
                iconTitle="View all"
            />
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
