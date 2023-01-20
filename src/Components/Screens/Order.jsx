import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';

import Title from '../Atoms/Title/Title';
import { BreakfastSandwhiches } from '../../data/data.json';
import { Burgers } from '../../data/data.json';
import MenuItem from '../Molecules/MenuItem/MenuItem';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import MenuTitleSection from '../Molecules/MenuTitleSection/MenuTitleSection';
import { dataContent } from '../../Utils/Labels';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import PopupModal from '../Molecules/PopupModal/PopupModal';
import LabelContent from '../Organisms/LabelContent/LabelContent';
import LabelItem from '../Molecules/LabelItem/LabelItem';

export default function Order() {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('ProductDetail');
    };
    const [modalVisible, setModalVisible] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState(null);

    const onPressHandler = (item) => {
        setActiveItem(item);
        setModalVisible(true);
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
            <LabelItem
                content={
                    <View style={{ height: 100 }}>
                        <Text style={styles.orderTitle}>Order</Text>
                        <Text style={styles.location}>
                            <Ionicons
                                style={{ fontSize: 20, color: 'red' }}
                                name={'md-location-sharp'}
                            />{' '}
                            30 Brisdale Road
                        </Text>
                        <Text style={{ paddingLeft: 8 }}>Now serving lunch and dinner</Text>
                    </View>
                }
                alignItems='flex-start'
            />
            <Title title='Explore our menu' size={13} paddingLeft={10} paddingTop={15} />
            <MenuTitleSection
                title={'Breakfast Sandwiches and Burritos'}
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
                        <TouchableOpacity onPress={() => onPressHandler(item)}>
                            <MenuItem
                                title={item.title}
                                price={item.standardPrice.price}
                                cal={item.standardPrice.cal}
                                img={item.img}
                            />
                            <PopupModal
                                modalVisible={modalVisible}
                                setModalVisible={setModalVisible}
                                activeItem={activeItem}
                                icon={
                                    <Icon
                                        name={'close'}
                                        size={25}
                                        style={{ paddingTop: 5 }}
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                        }}
                                    />
                                }
                                info={
                                    <Text>
                                        Calories do not reflect customization or additional
                                        ingredients. Adults and youth (ages 13 and older) need an
                                        average of 2,000 calories a day
                                    </Text>
                                }
                            />
                        </TouchableOpacity>
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
                        <TouchableOpacity onPress={() => onPressHandler(item)}>
                            <MenuItem
                                title={item.title}
                                price={item.standardPrice.price}
                                cal={item.standardPrice.cal}
                                img={item.img}
                            />
                            <PopupModal
                                modalVisible={modalVisible}
                                setModalVisible={setModalVisible}
                                activeItem={activeItem}
                                icon={
                                    <Icon
                                        name={'close'}
                                        size={25}
                                        style={{ paddingTop: 5 }}
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                        }}
                                    />
                                }
                                 info={
                                    <Text>
                                        Calories do not reflect customization or additional
                                        ingredients. Adults and youth (ages 13 and older) need an
                                        average of 2,000 calories a day.
                                    </Text>
                                }
                            />
                        </TouchableOpacity>
                    );
                }}
            />
            <LabelContent dataContent={dataContent} />
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 25,
        paddingTop: 10,
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
    orderTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 10,
    },
});
