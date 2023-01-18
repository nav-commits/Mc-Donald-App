import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import LabelContent from '../Molecules/LabelContent';
import Title from '../Atoms/Title';
import { BreakfastSandwhiches } from '../../data/data.json';
import { Burgers } from '../../data/data.json';
import MenuItem from '../Molecules/MenuItem';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import MenuTitleSection from '../Organisms/MenuTitleSection';
import { dataContent } from '../../Utils/Labels';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Order() {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('ProductDetail');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
            <LabelContent
                content={
                    <View>
                        <Text style={styles.titleText}>Order</Text>
                        <Text style={styles.location}>
                            <Ionicons style={{fontSize: 20, color: 'red'}} name={'md-location-sharp'} /> 30 Brisdale Road
                        </Text>
                        <Text style={{ paddingLeft: 8 }}>Now serving lunch and dinner</Text>
                    </View>
                }
                alignItems='flex-start'
            />
            <Title title='Explore our menu' size={13} paddingLeft={10} paddingTop={15} />
            <MenuTitleSection
                title={'Breakfast Sandwhiches and Buritos'}
                onPress={onPress}
                size={15}
                paddingLeft={10}
                paddingTop={15}
                iconTitle='View all'
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
                iconTitle='View all'
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
            <FlatList
                keyExtractor={(key) => {
                    return key.id;
                }}
                showsVerticalScrollIndicator={true}
                data={dataContent}
                renderItem={({ item }) => {
                    return (
                        <LabelContent
                            content={<Text style={styles.titleText}>{item.name}</Text>}
                            alignItems='flex-start'
                        />
                    );
                }}
            />
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    titleText: {
        fontSize: 25,
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
        margin: 5,
        padding: 10,
    },
    location: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 5,
    },
});
