import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Title from '../Atoms/Title/Title';
import MenuTitleSection from '../Molecules/MenuTitleSection/MenuTitleSection';
import PopupModal from '../Molecules/PopupModal/PopupModal';
import LabelContent from '../Organisms/LabelContent/LabelContent';
import MenuItem from '../Molecules/MenuItem/MenuItem';
import LabelItem from '../Molecules/LabelItem/LabelItem';

import { BreakfastSandwiches, Burgers } from '../../data/data.json';
import { dataContent } from '../../Utils/Labels';

const ORDER_TITLE = 'Order';
const EXPLORE_MENU_TITLE = 'Explore our menu';

export default function Order() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    const onPress = (title, data) => {
        navigation.navigate('ProductDetail', {
            dataContent: data,
            name: title,
            type: data.map((item) => item.burgerTitle).filter((v) => v !== undefined),
        });
    };

    const onPressHandler = (item) => {
        setActiveItem(item);
        setModalVisible(true);
        console.log(item)
    };

    const renderMenuItem = (item) => (
        <TouchableWithoutFeedback onPress={() => onPressHandler(item)}>
            <View>
                <MenuItem title={item.title} price={item.standardPrice.price} cal={item.standardPrice.cal} img={item.img} />
                <PopupModal
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    activeItem={activeItem}
                    icon={
                        <Icon
                            name={'close'}
                            size={25}
                            style={{ paddingTop: 5, width: '30px' }}
                            onPress={() => setModalVisible(false)}
                        />
                    }
                    info={
                        <Text>
                            Calories do not reflect customization or additional ingredients. Adults and youth (ages 13 and older) need an average of 2,000 calories a day, and children (ages 4 to 12) need an average of 1,500 calories a day. However, individual needs vary.
                        </Text>
                    }
                />
            </View>
        </TouchableWithoutFeedback>
    );

    return (
        <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
            <LabelItem
                content={
                    <View style={{ height: 70 }}>
                        <Text style={styles.orderTitle}>{ORDER_TITLE}</Text>
                        <Text style={styles.location}>
                            <Ionicons style={{ fontSize: 20, color: 'red' }} name={'md-location-sharp'} />
                            30 Brisdale Dr Bldg C, Brampton, ON
                        </Text>
                    </View>
                }
                alignItems='flex-start'
            />
            <Title title={EXPLORE_MENU_TITLE} size={13} paddingLeft={10} paddingTop={15} />

            <MenuTitleSection
                title={'Breakfast Sandwiches'}
                onPress={() => onPress('Breakfast Sandwiches', BreakfastSandwiches)}
                size={15}
                paddingLeft={10}
                paddingTop={15}
                iconTitle='View all'
            />

            <FlatList
                style={styles.listStyle}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={BreakfastSandwiches}
                renderItem={({ item }) => renderMenuItem(item)}
            />

            <MenuTitleSection
                title={'Burgers'}
                onPress={() => onPress('Burgers', Burgers)}
                size={15}
                paddingLeft={10}
                paddingTop={20}
                iconTitle='View all'
            />

            <FlatList
                style={styles.listStyle}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={Burgers}
                renderItem={({ item }) => renderMenuItem(item)}
            />

            <LabelContent dataContent={dataContent} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    orderTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 10,
    },
    location: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 5,
    },
    listStyle: {
        textAlign: 'center',
        margin: 5,
        padding: 10,
    },
});
