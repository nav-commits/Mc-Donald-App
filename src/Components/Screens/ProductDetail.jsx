import { Text, StyleSheet, ScrollView, View } from 'react-native';
import ProductDetailContent from '../Organisms/ProductDetailContent/ProductDetailContent';
import React, { useRef } from 'react';
import TabContent from '../Organisms/TabContent/TabContent';
export default function ProductDetail({ route }) {
    const ref = useRef();
    const [activeItem, setActiveItem] = React.useState(0);
    const onPressHandler = (item) => {
        if (item === 0) {
            ref.current.scrollTo({ x: 0, y: 0, animated: true });
            setActiveItem(item);
        } else if (item === 1) {
            ref.current.scrollTo({ x: 0, y: 500, animated: true });
            setActiveItem(item);
        } else if (item === 2) {
            ref.current.scrollTo({ x: 0, y: 1800, animated: true });
            setActiveItem(item);
        }
    };

    const { dataContent } = route.params;
    const { type } = route.params;
    return (
        <View>
            <TabContent
                type={type}
                activeItem={activeItem}
                onPress={onPressHandler}
              
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}
                ref={ref}
              
            >
                <Text style={styles.calorieContent}>
                    Calories do not reflect customization or additional ingredients. Adults and
                    youth (ages 13 and older) need an average of 2,000 calories a day, and children
                    (ages 4 to 12) need an average of 1,500 calories a day. However, individual
                    needs vary
                </Text>
                <ProductDetailContent dataContent={dataContent} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 2,
        backgroundColor: '#F5F5F5',
    },
    calorieContent: {
        padding: 15,
    },
    listStyle: {
        textAlign: 'center',
        margin: 5,
        padding: 10,
    },
});
