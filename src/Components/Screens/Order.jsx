import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native';

import Title from '../Atoms/Title/Title';
import { BreakfastSandwiches } from '../../data/data.json';
import { Burgers } from '../../data/data.json';
import MenuItem from '../Molecules/MenuItem/MenuItem';
import React from 'react';
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
    const burgerTitles = Burgers.map((title) => title.burgerTitle);
    const breakfastSandwichTitles = BreakfastSandwiches.map((title) => title.burgerTitle);
    const breakfastSandwichTitlesFiltered = breakfastSandwichTitles.filter((v) => v !== undefined);
    const burgerTitleFiltered = burgerTitles.filter((v) => v !== undefined);
    const onPress = (title) => {
        if (title === 'Burgers') {
            navigation.navigate('ProductDetail', {
                dataContent: Burgers,
                name: 'Burgers',
                type: burgerTitleFiltered,
            });
        } else if (title === 'Breakfast Sandwiches') {
            navigation.navigate('ProductDetail', {
                dataContent: BreakfastSandwiches,
                name: 'Breakfast Sandwiches',
                type: breakfastSandwichTitlesFiltered,
            });
        }
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
                    <View style={{ height: 70 }}>
                        <Text style={styles.orderTitle}>Order</Text>
                        <Text style={styles.location}>
                            <Ionicons
                                style={{ fontSize: 20, color: 'red' }}
                                name={'md-location-sharp'}
                            />
                            30 Brisdale Dr Bldg C, Brampton, ON
                        </Text>
                    </View>
                }
                alignItems='flex-start'
            />
            <Title title='Explore our menu' size={13} paddingLeft={10} paddingTop={15} />
            <MenuTitleSection
                title={'Breakfast Sandwiches'}
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
                data={BreakfastSandwiches}
                renderItem={({ item }) => {
                    return (
                        <TouchableWithoutFeedback onPress={() => onPressHandler(item)}>
                            <View>
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
                                            ingredients. Adults and youth (ages 13 and older) need
                                            an average of 2,000 calories a day, and children (ages 4
                                            to 12) need an average of 1,500 calories a day. However,
                                            individual needs vary.
                                        </Text>
                                    }
                                />
                            </View>
                        </TouchableWithoutFeedback>
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
                        <TouchableWithoutFeedback onPress={() => onPressHandler(item)}>
                            <View>
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
                                            ingredients. Adults and youth (ages 13 and older) need
                                            an average of 2,000 calories a day, and children (ages 4
                                            to 12) need an average of 1,500 calories a day. However,
                                            individual needs vary.
                                        </Text>
                                    }
                                />
                            </View>
                        </TouchableWithoutFeedback>
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
